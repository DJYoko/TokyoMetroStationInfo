const path = require('path');

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dest"),
		filename: "app.js"
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015'],
				},
			}
		],
		
	},
};