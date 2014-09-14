var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var open = require("open");

// Expand this gulpfile with the web app one
require('./webapp/gulpfile');

gulp.task('run-app', ['bundle:registration:watch', 'bundle:app:watch'], function () {
  nodemon({script: 'app.js', env: {'NODE_ENV': 'development'}, ext: 'js, html, hbs, handlebars'});
});

gulp.task('default', ['run-app']);

