// craco.config.js
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Usaremos el 'DefinePlugin' de Webpack para reemplazar
      // todas las referencias a 'localStorage' en el código por 'undefined'.
      // Esto engaña al HtmlWebpackPlugin y evita que intente inicializarlo.
      
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          // La clave debe ser 'localStorage' y el valor debe ser una cadena 
          // que Webpack pueda evaluar (aquí, undefined).
          localStorage: 'undefined', 
        })
      );

      // Si también se queja de 'window' o 'document' en el futuro,
      // se pueden agregar aquí:
      // window: 'undefined',
      // document: 'undefined',

      return webpackConfig;
    },
  },
};
