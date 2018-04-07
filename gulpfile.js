// 处理任务
var gulp = require("gulp");

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
})