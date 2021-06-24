module.exports = {
    async rewrites() {
        return [
          {
            source: '/service:path*',
            destination: 'https://api.example.com/:path*',
          },
        ]
      },
      
  };