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

## 开始
```s
$  cd desktop/ 
$  mkdir gulp-example
$  npm init -y
$  code .   // 命令行方式打开vscode
$  npm install -g gulp   // 全局暗转
$  npm install gulp --save-dev    // 开发环境安装gulp
$  mkdir src  //创建一个src文件夹
$  echo >gulpfile.js   回车   Ctrl + c        // 必须是这个名字，创建一个 gulpfile.js 文件
```

### 修改 gulpfile.js 文件
```javascrpt
// 处理任务
var gulp = require("gulp");
```
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
```javascript
gulp.task("message", function(){
    return console.log('Gulp is running!');
});
```
```s
$  gulp message   // 执行任务
```
### 执行任务
```s
$  gulp message
```


![Image text](http://##################)

### 定义默认任务， 继续在 gulpfile.js 文件编写
```s
$  gulp       // 在终端只需要 gulp 即可执行。
```
```javascript
// .... 省略内容

// 执行任务 gulp message

// 定义默认任务
gulp.task("default", function(){
    return console.log("这是默认的任务，执行要执行 gulp 即可！");
});
```
## 处理任务，具体使用 gulp 对象来处理任务
### 具体内容
1. 拷贝文件
2. 压缩图片
3. 压缩 js 代码

### 拷贝文件

1. 在src下创建两个文件
```s
    $  echo >src/index.html  回车  Ctrl + c
    $  ehoc >src/about.html  回车  Ctrl + c
```
2. 修改 index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>home </title>
    </head>
    <body>
        <h1>Home page </h1>
    </body>
    </html>
```
3. 修改 about.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>About </title>
    </head>
    <body>
        <h1>About  Us </h1>
    </body>
    </html>
```
#### 进入 gulpfile.js 接着 继续编写
拷贝文件
```javascript
// ......

// 拷贝文件
// "copyHtml" 这个名字自己起，起什么名字到时后执行什么名字就可以
gulp.task("copyHtml",function(){
    // 找到要复制的文件
    gulp.src("src/*.html") // * 是所有的文件。
        .pipe(gulp.dest("dist"));

    // 因为 gulp 是数据流的形式，所以，有pipe方法
    // 上面的这个语句的意思是，当触发pipe方法的时候，就把src下面的*.html(所有html)文件输出到 dist 文件夹下，dist会自动创建
});  

```
```s
    $  gulp gulpHtml    // gulp gulHtml(刚刚你起的名字)
```


### 图片压缩
npm 下载压缩图片的模块
```s
    $  npm install gulp-imagemin  --save-dev
```
下载完成后，
进入 gulpfile.js 文件，在文件头部添加 imagemin ....来引入模块
```javascript
// 处理任务
var gulp = require("gulp");

var imagemin = require("gulp-imagemin");
```
创建一个 images 文件夹
```s
    $  mkdir src/images  // 创建一个 images 文件夹
```
下载一张图片，放到images文件夹中，然后

进入 gulpfile.js 继续接着编写 图片压缩代码

```javascript
// 图片压缩
gulp.task("imageMin", function(){
    // 压缩所有的图片
    gulp.src("src/images/*.jpg")
        .pipe(imagemin()) // imagemin 是刚刚你引入的模块
        .pipe(gulp.dest("dist/images")); // 这句话的意思是，在 dist 文件夹下， 再创建一个 images 文件夹，存放压缩过后的图片文件
});  
```

```s
    $  gulp  imageMin   // 在终端执行 压缩图片 命令
```

### 压缩 js 代码
创建一个 js 文件
```s
    $  mkdir  src/js 
    $  echo  src/js/file.js   Ctrl + c
```

进入 file.js 文件 编写文件
```javascript
console.log('这是 file1 中的内容');

function sum (num1, num2) {
    return num1 + num2
}

sum(5, 7);
```
安装压缩 js 文件的模块
```s
    $  npm install gulp-uglify --save-dev
```

引入模块， 进入 gulpfile.js 编写
```javascript
// 处理任务
var gulp = require("gulp");

var imagemin = require("gulp-imagemin");

var uglify = require("gulp-uglify");  // 这个
```

进入 gulpfile.js 文件，接着继续编写
```javascript

```
执行压缩 js 文件命令
```s
    $  gulp minify    // 压缩 js
```
## 处理任务2，具体使用 gulp 对象来处理任务
### 具体内容
1. Sass转换
2. 执行多任务
3. 代码合并
4. 监听文件 

### Sass 转换为 css
下载 gulp-sass 模块
```s
    $  npm install gulp-sass --save-dev
    
    // 报错了！！！，找度娘问了问，是因为 node-sass 国内不能正常访问，还有需要python依赖，windows下，如果node-gyp报错还需vs的依赖，....。

    解决办法：改为国内 淘宝镜像安装   // 原来的 npm 照样可以用。 npm 与cnpm不互斥。如果要[删除cnpm](https://segmentfault.com/q/1010000004596263/a-1020000004596558)
    $  npm i -g cnpm 
    $  cnpm install 
    $  cnpm i -D gulp-sass
```
在 src 下创建一个 sass文件夹
```s
    $  mkdir src/sass 
    $  echo src/sass/style.scss    Ctrl + c  // 注意是是 .scss 文件
```


用vscode编写 style.scss 文件

```scss
$bgColor : #cc6677;

body{
    background: $bgColor;
}
```
进入 gulpfile.js 文件，将 gulp-sass 模块引入
```javascript
var uglify = require("gulp-uglify");

var sass = require("gulp-sass");
```
进入 gulpfile.js 文件，接着，继续编写
```javascript
// sass 转换为 css
gulp.task("sass", function(){
    gulp.src("src/sass/*.scss")
        .pipe(sass().on("error", sass.logError)) // 这里的 on 是绑定 error错误事件，如果有错误，就会打印错误
        .pipe(gulp.dest("dist/css"));   // 没有就会 输出  这些文件。
});
```
命令行执行 gulp-sass
```s
    $  gulp  sass   // 后面的sass 就是 gulpfile.js 中  gulp.task()的第一个参数名字。
```
### 执行多个任务

修改src下面的 index.html，添加link引入stye.css和file.js
修改src下面的 about.html，添加link引入stye.css和file.js

index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>home </title>
        <link rel="stylesheet" href="css/style.css">     <!-- 这个 -->
    </head>
    <body>
        <h1>Home page </h1>
        <script src="js/file.js"></script>  <!-- 还有就是，这个 -->
    </body>
</html>
```
about.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>About  </title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>About Us  </h1>
        <script src="js/file.js"></script>
    </body>
    </html>
```

执行拷贝文件，将 src 下的文件拷贝到 dist 文件下
```s
    $  gulp copyHtml  
```

在 gulpfile.js 文件下，找到 这段代码，然后将它剪切到 gulpfile.js 文件的最后面。

```javascript
// ...

// 定义默认任务
gulp.task("default", function(){
    return console.log("这是默认的任务，执行要执行 gulp 即可！");
});
```

然后修改它，把回调函数去掉，改为数组的形式，修改后如下：
```s
    // 定义默认任务
    // 执行多个任务
    $  gulp.task("default", ["message", "copyHtml", "imageMin", "sass", "minify"]);
```

然后把 dist 文件夹删掉
![Image text](.............)
```s
    $  del  dist    回车 ， 然后输入y
    
```
执行多个任务

```s
    $  gulp     // 就这样，可以执行数组的所有操作。打开文件gulp-example下面的dist文件夹就是 打包之后的文件。  
```

### 代码合并
下载代码合并模块 gulp-concat --save-dev
```s
    $  cnpm install gulp-concat --save-dev     // 注意是 cnpm  ,当然也可以用 npm ，cnpm 和 npm不互斥 。当npm用不了的时候可以试试cnpm。
    
    [npm介绍与cnpm介绍](https://www.douban.com/note/579290045/) 
```

在 gulpfile.js 中引入模块
```javascript
    var concat = require("gulp-concat");
```

创建一个file2.js文件

```s
    $  echo >src/js/file2.js   回车, Ctrl + C
```
向 file2.js 写入js代码
```javascript
console.log('这个file2.js 信息');
alert("这是file2里面的方法")
```
进入 gulpfile.js 的后面接着，编写
```javascript
// 代码合并
gulp.task("scripts", function(){
    gulp.src("src/js/*.js")
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"));
      
      // 1. 把上面的图片 压缩 js 的方法任务给注释掉，因为在这里合并了，再压缩。

      // 2. 找到src/js下的所有js文件。合并成一个js，命名为main.js
      // 3. 然后，就代码压缩
      // 4. 然后将main.js 放到到 dist/js 里面
});

```
修改默认执行多个任务的配置，将 minify 改为 scripts
```s
    // 修改前
    //$  gulp.task("default", ["message", "copyHtml", "imageMin", "sass", "minify"]);

    // 修改后
    $  gulp.task("default", ["message", "copyHtml", "imageMin", "sass", "scripts"]);
```
将 dist 文件夹删掉
```s
    $  del dist  回车，然后输入y
```

运行gulp
```s
    $  gulp   回车  
```
在gulpfile.js 文件中 添加以下代码
```javascript

gulp.task("watch", function() {
  gulp.watch("src/js/*.js",['script']);
  gulp.watch("src/images/*",['imageMin']);
  gulp.watch("src/sass/*.scss",['sass']);
  gulp.watch("src/*.html",['copyHtml']);
})

```
在终端连续两次  Ctrl + c  退出监听。
运行项目
```s
    $  gulp watch
```

