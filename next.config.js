const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bpheadlesssmes.wpenginepowered.com',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: ''
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self' https://${getWpHostname()} https://bigquery.googleapis.com http://beacon.local https://region1.google-analytics.com;
              frame-ancestors 'self';
              object-src 'none';
            `.replace(/\s{2,}/g, ' ') // Minify header
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), usb=(), display-capture=()'
          }
        ]
      }
    ];
  }
});
