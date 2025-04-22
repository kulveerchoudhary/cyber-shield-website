import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { RateLimiter } from '../utils/security';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const loginRateLimiter = new RateLimiter(900000, 5); // 15 minutes window, 5 attempts

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Check for stored token on mount
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        
        if (decoded.exp && decoded.exp > currentTime) {
          setIsAuthenticated(true);
          setUser(decoded);
        } else {
          // Token expired
          localStorage.removeItem('auth_token');
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Token validation error:', error);
        localStorage.removeItem('auth_token');
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      if (loginRateLimiter.isRateLimited()) {
        throw new Error('Too many login attempts. Please try again later.');
      }

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const { token } = await response.json();
      
      // Store token securely
      localStorage.setItem('auth_token', token);
      
      // Decode and set user data
      const decoded = jwtDecode(token);
      setIsAuthenticated(true);
      setUser(decoded);
      
      // Reset rate limiter on successful login
      loginRateLimiter.reset();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    try {
      if (loginRateLimiter.isRateLimited()) {
        throw new Error('Too many reset attempts. Please try again later.');
      }

      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Password reset failed');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 