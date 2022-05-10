const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const babel = require( './babel' );
const css = require( './css-modules' );
const paths = require( './paths' );
const plugins = require( './webpack.plugins' );
const utils = require( './utils' );

module.exports = ( env, argv ) => {
  const cssModuleNames = css.getCssModuleNames( argv.mode );

  return {
    devServer: {
      historyApiFallback: true,
      'static': {
        directory: paths.builds,
      },
    },
    entry: utils.setEntry( env ),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babel.setBabelConfig(),
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          include: /\.module\.(sa|sc|c)ss$/,
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: cssModuleNames,
                  mode: 'local',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          exclude: /\.module\.(sa|sc|c)ss$/,
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ],
        },
        {
          test: [
            /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/,
          ],
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
            },
          },
        },
      ],
    },
    output: utils.setOutput( env, argv.mode ),
    plugins: plugins.loadPlugins( argv.mode, env ),
    resolve: {
      extensions: [
        '*', '.js', '.jsx', '.ts', '.tsx',
      ],
    },
    target: 'web',
  };
};
