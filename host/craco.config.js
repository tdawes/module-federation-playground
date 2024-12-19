const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    alias: {
      "custom-package": require.resolve("package-v1"),
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          remotes: {
            Mfe1: "Mfe1@http://localhost:3001/remoteEntry.js",
            Mfe2: "Mfe2@http://localhost:3002/remoteEntry.js",
          },
          shared: {
            "custom-package": {
              singleton: true,
              version: "1.0.1",
              requiredVersion: ">=1.0.1",
            },
          },
        }),
      ],
    },
  },
};
