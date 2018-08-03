const SentryCliPlugin = require('@sentry/webpack-plugin');

const config = {}

if (process.env.NODE_ENV === 'production') {
  config.configureWebpack = {
    plugins: [
      new SentryCliPlugin({
        include: './dist',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
      }),
    ],
  }
}

module.exports = config
