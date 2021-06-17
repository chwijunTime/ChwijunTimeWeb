const isLocal = process.env.NODE_ENV === 'local';

module.exports = {
  output: {
    filename: isLocal ? 'client-bundle.[name].js' : 'client-bundle.[chunkhash].js',
  },
}