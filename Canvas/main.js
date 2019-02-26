var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

autoSetCanvasSize(canvas, context)

listenToUser(canvas)
//调色板操作

var Toning = "red"
Toningred.onclick = function () {
    Toningred.classList.add('active')
    Toningblue.classList.remove('active')
    Toninggreen.classList.remove('active')
    Toning = "red"
}
Toninggreen.onclick = function () {
    Toninggreen.classList.add('active')
    Toningred.classList.remove('active')
    Toningblue.classList.remove('active')
    Toning = "green"
}
Toningblue.onclick = function () {
    Toningblue.classList.add('active')
    Toninggreen.classList.remove('active')
    Toningred.classList.remove('active')
    Toning = "blue"
}
/*
 Toningred.onclick=function(){
    context.strokeStyle = 'red'
 }
 Toninggreen.onclick=function(){
    context.strokeStyle = 'green'
 }
 Toningblue.onclick=function(){
    context.strokeStyle = 'blue'
 } */
//画笔粗细操作
var lineWidth = 5
thin.onclick = function () {
    lineWidth = 3
}
thick.onclick = function () {
    lineWidth = 6
}
//刷新操作
refresh.onclick = function () {
    context.clearRect(0, 0, canvas.width, canvas.height)
    autoSetCanvasSize(canvas, context)

}
//下载操作
download.onclick = function () {
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = 'xxxxxxxx'
    a.target = '-blank'
    a.click()
}
//画笔，橡皮檫切换操作
var eraserEnabled = false
brush.onclick = function () {
    eraserEnabled = false
    brush.classList.add('active')
    eraser.classList.remove('active')
}
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    brush.classList.remove('active')
}


/******/

function autoSetCanvasSize(canvas, context) {
    setCanvasSize()
    //根据用户的宽高进行改变
    window.onresize = function () {
        setCanvasSize()
    }

    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth //获取屏幕宽度
        var pageHeight = document.documentElement.clientHeight //获取屏幕高度

        canvas.width = pageWidth
        canvas.height = pageHeight
        context.fillStyle = "white"
        context.fillRect(0, 0, pageWidth, pageHeight)
    }
}
//画一个圆
/*function drawCircle(x, y, radius) {
  context.beginPath() //开始
  context.fillStyle = 'black' //填充颜色
  context.arc(x, y, radius, 0, Math.PI * 2); //以x，y为中心，radius半径，角度，圆的周长
  context.fill()
}*/
//在两点直接画直线，黑色
function drawLine(x1, y1, x2, y2) {
    context.beginPath(); //开始
    context.strokeStyle = Toning //直线的颜色
    context.moveTo(x1, y1) // 起点
    context.lineWidth = lineWidth
    context.lineTo(x2, y2) // 终点
    context.stroke()
    context.closePath() //结束
}

function listenToUser(canvas) {

    var using = false
    var lastPoint = {
        x: undefined,
        y: undefined
    }
    //特性检测
    if (document.body.ontouchstart !== undefined) {
        //可以触屏的设备
        canvas.ontouchstart = function (point) {
            var x = point.touches[0].clientX //获取坐标
            var y = point.touches[0].clientY //获取坐标
            using = true
            if (eraserEnabled) {
                context.fillRect(x - 5, y - 5, 20, 20);
            } else {
                lastPoint = {
                    "x": x,
                    "y": y
                }
            }
        }
        canvas.ontouchmove = function (point) {

            var x = point.touches[0].clientX //获取坐标
            var y = point.touches[0].clientY //获取坐标

            if (!using) {
                return
            } //为false，直接返回

            if (eraserEnabled) {
                context.fillRect(x - 5, y - 5, 20, 20);
            } else {
                var newPoint = {
                    "x": x,
                    "y": y
                }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint //实时更新坐标值
            }
        }
        canvas.ontouchend = function (point) {
            using = false
        }
    } else {
        //非触屏设备
        //监听鼠标点击
        canvas.onmousedown = function (point) {
            var x = point.clientX //获取坐标
            var y = point.clientY //获取坐标
            using = true
            if (eraserEnabled) {
                context.fillRect(x - 5, y - 5, 20, 20);
            } else {
                lastPoint = {
                    "x": x,
                    "y": y
                }
            }
        }
        //监听鼠标移动
        canvas.onmousemove = function (point) {
            var x = point.clientX //获取坐标
            var y = point.clientY //获取坐标

            if (!using) {
                return
            } //为false，直接返回

            if (eraserEnabled) {
                context.fillRect(x - 5, y - 5, 20, 20);
            } else {
                var newPoint = {
                    "x": x,
                    "y": y
                }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint //实时更新坐标值
            }

        }
        //监听鼠标松开
        canvas.onmouseup = function (point) {
            using = false
        }
    }
}