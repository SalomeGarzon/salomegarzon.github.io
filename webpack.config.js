const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: './dist', // Directorio para servir archivos estáticos
    hot: true, // Habilitar el reemplazo en caliente (Hot Module Replacement)
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ],
};
