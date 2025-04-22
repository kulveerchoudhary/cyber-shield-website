import DOMPurify from 'dompurify';

// Input validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// Sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
  });
};

// XSS Prevention
export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// URL Validation
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Phone Number Validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

// Input Length Validation
export const validateLength = (input: string, min: number, max: number): boolean => {
  return input.length >= min && input.length <= max;
};

// File Type Validation
export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};

// File Size Validation (in bytes)
export const validateFileSize = (file: File, maxSize: number): boolean => {
  return file.size <= maxSize;
};

// CSRF Token Generation
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Rate Limiting Helper
export class RateLimiter {
  private attempts: Map<string, { count: number; timestamp: number }>;
  private windowMs: number;
  private maxAttempts: number;

  constructor(windowMs: number = 900000, maxAttempts: number = 5) {
    this.attempts = new Map();
    this.windowMs = windowMs;
    this.maxAttempts = maxAttempts;
  }

  isRateLimited(key: string): boolean {
    const now = Date.now();
    const attempt = this.attempts.get(key);

    if (!attempt) {
      this.attempts.set(key, { count: 1, timestamp: now });
      return false;
    }

    if (now - attempt.timestamp > this.windowMs) {
      this.attempts.set(key, { count: 1, timestamp: now });
      return false;
    }

    if (attempt.count >= this.maxAttempts) {
      return true;
    }

    attempt.count++;
    return false;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
} 