const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { whenDev } = require("@craco/craco");

module.exports = {
  devServer: {
    port: 3002,
    hot: true,
  },
  webpack: {
    alias: {
      "custom-package": require.resolve("package-v2"),
    },
    configure: (webpackConfig) => {
      whenDev(() => {
        webpackConfig.output = {
          ...webpackConfig.output,
          publicPath: "auto",
        };
      });
      return webpackConfig;
    },
    plugins: {
      add: [
        new HtmlWebpackPlugin({
          inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
          template: "public/index.html",
          excludeChunks: ["Mfe2"], // exclude remote chunk to avoid error in hot reload
          publicPath: "/",
        }),
        new ModuleFederationPlugin({
          name: "Mfe2",
          filename: "remoteEntry.js",
          exposes: {
            "./Mfe2": "./src/Mfe2",
          },
          shared: {
            "custom-package": {
              singleton: true,
              version: "2.0.1",
              requiredVersion: "^2.0.1",
            },
          },
        }),
      ],
      remove: ["HtmlWebpackPlugin"],
    },
  },
};
