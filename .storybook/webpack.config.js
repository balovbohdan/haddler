const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

console.log(path.resolve(__dirname, '../src/css'));debugger;

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({ test: /\.(ts|tsx)$/, loader: require.resolve('awesome-typescript-loader') });

    config.module.rules.push({
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/css'),
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { modules: true } }
        ]
    });

    config.module.rules.push({
        test: /\.(svg|png)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name]-[hash:8].[ext]',
            include: path.resolve(__dirname, 'src/assets')
        }
    });

    config.plugins.push(new TSDocgenPlugin()); // optional
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.json', '.css');
    return config;
};