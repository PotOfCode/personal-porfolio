const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use((req, res, next) => {
    // Cabecera para prevenir clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Cabecera adicional de seguridad (CSP)
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");    
    next();
  });

  // Configuración del proxy (si es necesario)
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000', // o la URL de tu API
      changeOrigin: true,
    })
  );
};
