// Load Gulp and all of our Gulp plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');

var DEST = 'dist/';


var fs = require('fs'),
    path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getBrowserify(entry, suffix) {

    var b = browserify({
        entries: entry,
        standalone: ( suffix == "all" ) ? 'hl7dictionary' : 'hl7dictionary_v' + suffix.replace(/\./g, '_')
    });

    return b.bundle()
        .pipe(source("hl7dictionary." + ( ( suffix == "all" ) ? "" : suffix ) + ".js"))
        .pipe(buffer())
        .pipe(gulp.dest(DEST))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));

}

gulp.task("browserify", [], function(done) {

    getBrowserify("./lib/index.js", "all");

    var directories = getDirectories("./lib");
    directories.forEach(function(item){
        getBrowserify("./lib/"+item+"/index.js", item);
    });

});
