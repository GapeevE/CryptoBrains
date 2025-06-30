# Crypto Brains 🧠

![preview screen](./accets/preview.png)

Track cryptocurrencies in real-time with beautiful visualizations and smooth animations! Crypto Brains delivers up-to-the-minute crypto data through an elegant, responsive interface powered by CoinGecko API.

## ✨ Key Features

 - 📈 Real-time Crypto Data powered by CoinGecko API

 - 🎢 Animated Card Slider with dynamic filtering

 - ⚡ Skeleton Loading for seamless UX

 - 📱 Fully Responsive mobile-first design

 - 🎨 Interactive D3.js Visualizations for market data

 - 🛸 Animated UI Components with hover/click effects

 - 🌓 Dark/Light Mode support

 - 🏎️ Blazing Fast Vite-powered performance

## 🛠 Tech Stack

- <img src="./accets/react.png" width="20" height="20"> React -	Core framework
- <img src="./accets/vite.png" width="20" height="20"> Vite -	Lightning-fast build tool
- <img src="./accets/ts.png" width="20" height="20"> TypeScript -	Type-safe development
- <img src="./accets/tailwind.png" width="20" height="20"> Tailwind CSS -	Utility-first styling
- <img src="./accets/d3.png" width="20" height="20"> D3.js -	Data visualizations
- <img src="./accets/API.png" width="20" height="20"> CoinGecko API -	Real-time crypto data
- <img src="./accets/vercel.png" width="20" height="20"> Vercel -	Deployment platform

🦎 [CoinGecko API](https://docs.coingecko.com)
▼ [Vercel](https://vercel.com)

## 🚀 Live Demo

Experience Crypto Brains live:

👉 [link](https://crypto-brains-em6qd2p56-yegors-projects-81d5a69f.vercel.app/)

## ⚡ Quick Start Guide

Get Crypto Brains up and running in under 2 minutes! Follow these simple steps:

```
# 1. Clone the repository
git clone https://github.com/GapeevE/CryptoBrains.git

# 2. Navigate to project directory
cd crypto-brains

# 3. Install dependencies
npm install

# 4. Create environment configuration
echo "VITE_COINGECKO_API_KEY=YOUR_API_KEY" > .env

# 5. Start development server
npm run dev
```

## 🎨 Design System

UI/UX designed by Mad Brains:

👉 [link](https://www.figma.com/design/EKbp40PN2vP5WsItDPg1h7/Crypto-Brains-Website?node-id=663-177842&p=f&t=5W43Y5RpBuDHj4AA-0)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## More

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
