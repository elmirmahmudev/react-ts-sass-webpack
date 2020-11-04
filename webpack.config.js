const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
    // 'npm run build -- --color' access color param 'process.argv[2].substring(2)'

    return {
        entry: './src/index.tsx',
        // entry: {
            // app: './src/index.ts',
            // another: './src/another-module.js',
            // index: { import: './src/index.js', dependOn: 'shared' },
            // another: { import: './src/another-module.js', dependOn: 'shared' },
            // shared: 'lodash',
        // },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
            open: true
        },
        plugins: [
            // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            // new HtmlWebpackPlugin({
            //   title: 'Output Management',
            // }),
        ],
        output: {
            // filename: 'bundle.js',
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                    'style-loader',
                    'css-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                    'file-loader',
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                    'file-loader',
                    ],
                },
            ],
        },
    }
};