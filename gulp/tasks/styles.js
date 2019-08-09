var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nest = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, nest, cssvars, autoprefixer]))
    .on('error', function(error) {
        console.log(error.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
})