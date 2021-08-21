module.exports = {
  entry: "./index.js",
  mode: "development",
  module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        }]
    },
    output: {
        filename: "bundle.js"
    },
};
