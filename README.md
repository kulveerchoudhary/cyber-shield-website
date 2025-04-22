# Cyber Shield Website

A modern, responsive website built with React, TypeScript, and Vite.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Interactive components
- Optimized performance
- SEO friendly

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with the production build.

## Deployment Options

### 1. Netlify

1. Create a `netlify.toml` file in the root:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

2. Deploy through Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

### 2. GitHub Pages

1. Add `homepage` field to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### 3. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init
```

3. Deploy:
```bash
firebase deploy
```

### 4. AWS Amplify

1. Install AWS Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify:
```bash
amplify init
```

3. Deploy:
```bash
amplify push
```

## Project Structure

```
project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT 