module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('dart-sass'), // This line must in sass option
      },
    },
  }
}