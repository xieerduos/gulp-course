// 处理任务
var gulp = require("gulp");

var imagemin = require("gulp-imagemin");
/**
 * 常用的方法
 * 
 * gulp.task  -- 定义任务，比如说定义一个压缩代码的任务，比如定义一个压缩图的任务，都可以使用gulp.task任务。非常重要的任务
 * 
 * gulp.src  -- 找到到需要执行任务的文件
 * 
 * gulp.dest -- 执行任务的文件的去处，就是当前要执行的文件，最终需要去到哪里，就是使用这个方法。
 * 
 * gulp.watch -- 用来观察文件是否发送变化
 * 
 * */ 

//  定义任务
// 第一个参数是，任务的名字，自己起，第二个是回调函数
gulp.task("message", function(){
    return console.log('Gulp is running!');
});

// 执行任务 gulp message

// 定义默认任务
gulp.task("default", function(){
    return console.log("这是默认的任务，执行要执行 gulp 即可！");
});

// 拷贝文件
// "copyHtml" 这个名字自己起，起什么名字到时后执行什么名字就可以
gulp.task("copyHtml",function(){
    // 找到要复制的文件
    gulp.src("src/*.html") // * 是所有的文件。
        .pipe(gulp.dest("dist"));

    // 因为 gulp 是数据流的形式，所以，有pipe方法
    // 上面的这个语句的意思是，当触发pipe方法的时候，就把src下面的*.html(所有html)文件输出到 dist 文件夹下，dist会自动创建
});  


// 图片压缩
gulp.task("imageMin", function(){
    // 压缩所有的图片
    gulp.src("src/images/*.jpg")
        .pipe(imagemin()) // imagemin 是刚刚你引入的模块
        .pipe(gulp.dest("dist/images")); // 这句话的意思是，在 dist 文件夹下， 再创建一个 images 文件夹，存放压缩过后的图片文件
}); 
