## Gulp入门到实战

### Gulp是什么？
工具
1. Gulp是一个开源的JavaScript开源自动化工具。
2. Gulp应用于前后端代码管理的一种工具。
3. Gulp是基于Node.js和NPM应用的构建工具。
4. Gulp主要用于处理耗时及重复的任务。
5. Gulp可以解决上百种的任务 例如：代码压缩 合并代码等。

### Gulp能做什么？
很多很多...
1. 代码压缩
2. 合并代码
3. 压缩图片
4. Sass转换
5. 等等等等

### Gulp的工作原理
原理
1. Gulp是基于Node.js中的数据流
2. Gulp主要使用pipe事件输入及输出
3. 插件独立使用
- Gulp每一个任务都是应用插件

### 为什么选择Gulp？
Gulp的优势
1. Gulp是基于代码进行配置
2. Gulp的可读性更高
- Gulp比Grunt更简单
3. Gulp基于数据流，所以可以操作pipe()事件。

### 如何安装Gulp
安装步骤
1. 首先确认设备是否拥有Node环境。
2. 通过 npm install -g gulp 安装全局
3. 初始化 package.json 
4. 在项目文件中安装 gulp 

# 开始
```javascript
1. cd desktop/ 
2. mkdir gulp-example
3. npm init -y
4. code .   // 命令行方式打开vscode
5. npm install -g gulp   // 全局暗转
6. npm install gulp --save-dev    // 开发环境安装gulp
7. mkdir src  //创建一个src文件夹
8. echo >gulpfile.js   回车   Ctrl + c        // 必须是这个名字，创建一个 gulpfile.js 文件
```

### 修改 gulpfile.js 文件
```javascrpt
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
```
### 执行任务
```
9. gulp message
```


![Image text](http://##################)

### 定义默认任务， 继续在 gulpfile.js 文件编写
```
10. gulp       // 在终端只需要 gulp 即可执行。
```
```javascript
// .... 省略内容

// 执行任务 gulp message

// 定义默认任务
gulp.task("default", function(){
    return console.log("这是默认的任务，执行要执行 gulp 即可！");
});
```
# 处理任务，具体使用 gulp 对象来处理任务
