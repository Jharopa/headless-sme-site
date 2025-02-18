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
  }
});
