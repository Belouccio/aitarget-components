module.exports = {
  open:     false,
  port:     4200,
  files:    ['./dist/**/*.{html,htm,css,js}'],
  server:   {
    baseDir:    './dist',
    middleware: {
      0: null
    }
  },
  logLevel: "silent"
};
