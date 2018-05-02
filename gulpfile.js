var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");

gulp.task("sass",function(){
    gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
})

gulp.task("server",function(){
    gulp.src("src")
        .pipe(server({
            port:8080,
            open:true,
            livereload:true,
            middleware:function(req,res,next){
                next();
            }
        }))
})

gulp.task("watch",function(){
    gulp.watch("src/scss/*.scss",["sass"]);
})

gulp.task("default",["sass","watch","server"])