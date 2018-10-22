var allButtons=$('#buttons>span')


for(let i=0;i<allButtons.length;i++){
	$(allButtons[i]).on('click',function(Whichbutton){
		var index=$(Whichbutton.currentTarget).index()  //返回一个数字，表示这个元素在父元素是第几位
		var px=index*-500
		$('#images').css('transform','translateX('+px+'px)') //

		n=index
		autoclass(allButtons.eq(n))  //eq是
	})
}

/*自动轮播*/
var n=0
var max=allButtons.length
var timeId=setTimer()


/*鼠标碰到图片轮播停止,一离开轮播继续*/
$('.window').on('mouseenter',function(){
	window.clearInterval(timeId)
	console.log(n)
})

$('.window').on('mouseleave',function(){
	timeId=setTimer()
})

/*封装函数*/
function autoclass($button){
	$button.addClass('spancolor')
	.siblings('.spancolor')
	.removeClass('spancolor')
}

function playSlide(index){
	allButtons.eq(index).trigger('click')
}

function setTimer(){
	return setInterval(()=>{
		n+=1
		playSlide(n%max)
	},3000)
}

/*$('#p1').on('click',function(){
	$('#images').css(
		'transform','translateX(0)'
	)
})
$('#p2').on('click',function(){
	$('#images').css(
		'transform','translateX(-500px)'
	)
})
$('#p3').on('click',function(){
	$('#images').css(
		'transform','translateX(-1000px)'
	)
})
$('#p4').on('click',function(){
	$('#images').css(
		'transform','translateX(-1500px)'
	)
})
$('#p5').on('click',function(){
	$('#images').css(
		'transform','translateX(-2000px)'
	)
})*/