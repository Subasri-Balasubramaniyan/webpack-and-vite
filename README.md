📘 1. Introduction to Module Bundlers

Modern JavaScript projects often use modules (import / export) to organize code into multiple files.
Browsers, however, can’t always efficiently handle many files — so we use module bundlers like Webpack and Vite to bundle all files into one optimized package for faster loading.

🧩 2. Webpack
🔹 What is Webpack?

Webpack is a powerful module bundler for JavaScript applications.
It bundles JavaScript, CSS, images, and other assets into one or more optimized files.

⚡ Key Features

Bundles multiple JS modules into one file.

Supports CSS, images, and other assets.

Uses loaders to transform files.

Uses plugins to optimize builds.

Supports development server with hot reloading.

🏗️ Folder Structure Example
webpack-project/
│
├── src/
│   ├── index.js
│   ├── greet.js
│
├── dist/
│   └── index.html
│
├── package.json
└── webpack.config.js

🔹 Example Code

src/greet.js

export function greet(name) {
  return `Hello, ${name}!`;
}


src/index.js

import { greet } from './greet.js';
console.log(greet("Subasri"));

🔹 webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',       // Entry file
  output: {
    filename: 'bundle.js',       // Output bundle
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',           // or 'production'
};

🔹 index.html (inside dist/)
<!DOCTYPE html>
<html>
<head>
  <title>Webpack Example</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>

⚙️ package.json
{
  "name": "webpack-project",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^5.0.0"
  }
}

🧠 How to Run Webpack Project

Initialize project

npm init -y


Install Webpack

npm install webpack webpack-cli --save-dev


Build Project

npm run build


Open dist/index.html in browser → You’ll see console output.

⚡ 3. Vite
🔹 What is Vite?

Vite (pronounced veet) is a next-generation frontend build tool.
It offers instant dev server start, fast HMR (Hot Module Replacement), and uses ES Modules (ESM) natively.

🪄 Why Vite is Faster

Uses ESBuild (written in Go) → very fast.

Only compiles files that are used.

Supports React, Vue, Svelte, etc.

🏗️ Folder Structure Example
greeting-vite/
│
├── index.html
├── main.js
├── greet.js
└── package.json

🔹 Example Code

greet.js

export function greet(name) {
  return `Hello, ${name}! Welcome to Vite 🚀`;
}


main.js

import { greet } from './greet.js';
document.body.innerHTML = `<h1>${greet('Subasri')}</h1>`;


index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vite Example</title>
</head>
<body>
  <script type="module" src="/main.js"></script>
</body>
</html>

⚙️ package.json
{
  "name": "greeting-vite",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}

🧠 How to Run Vite Project

Initialize project

npm init -y


Install Vite

npm install vite --save-dev


Start development server

npm run dev


Open the URL shown in terminal (like http://localhost:5173) → You’ll see your page live.

⚖️ 4. Webpack vs Vite Comparison
Feature	Webpack	Vite
Speed (dev)	Slow startup	Instant startup
Hot Reload	Slower	Very fast
Build Tool	JavaScript-based	ESBuild (Go) based
Ease of Setup	More configuration	Minimal setup
Use Case	Large enterprise apps	Modern, lightweight apps
Output	Single bundle file	Optimized ESM output
🧩 5. Summary

Webpack – Manual configuration, powerful for complex projects.

Vite – Fast, modern, and ideal for small to medium projects.

Both handle modern ES6 Modules and are essential for modern frontend development.
