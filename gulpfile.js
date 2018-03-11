const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//	Gulp依賴物從這裡開始

gulp.task('default',function(){
	//	執行 ESlint
	gulp.src(["es6/**/*.js","public/es6/**/*.js"])
	.pipe(eslint())
	.pipe(eslint.format());
	
	//console.log('Hello Gulp.js');
	
	//	Gulp工作從這裡開始
	//	Node來源
	
	gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
	//瀏覽器來源
	gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
	
});