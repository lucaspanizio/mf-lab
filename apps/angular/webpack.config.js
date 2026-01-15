const { container } = require('webpack');

module.exports = (config) => {
  config.output.uniqueName = 'mfLabAngular';
  config.output.publicPath = 'http://localhost:4200/';
  config.optimization.runtimeChunk = false;

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: 'mfLabAngular',
      filename: 'remoteEntry.js',
      exposes: {
        './WebComponent': './src/bootstrap.ts',
      },
    }),
  );

  return config;
};
