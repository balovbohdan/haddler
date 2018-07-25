import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },


            // React & TypeScript.
            // https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
            // https://stackoverflow.com/questions/40899868/typescript-cannot-find-module-react
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/ },

            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/css'),
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    }
                ]
            }
        ]
    },
    plugins: [ new CopyWebpackPlugin([{ from: 'src/index.html' }]) ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};