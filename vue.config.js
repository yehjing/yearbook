module.exports = {
  // publicPath: '/yearbook/dist/'
  publicPath: process.env.NODE_ENV === 'production'
    ? 'dist/'
    : '/',
};
