var allButtons=$('#buttons>ul>li')


for(let i=0;i<allButtons.length;i++){
	$(allButtons[i]).on('click',function(Whichbutton){
		var index=$(Whichbutton.currentTarget).index()  //返回一个数字，表示这个元素在父元素是第几位
		var px=index*-920
		$('#images').css('transform','translateX('+px+'px)') //

		n=index
		autoclass(allButtons.eq(n))  //eq是
	})
}

document.addEventListener('visibilitychange',function(e){
	if(document.hidden){
		window.clearInterval(timeId)
	}else{
		timeId=setTimer()
	}
})

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
	$button.addClass('active act')
	.siblings('.active ')
	.removeClass('active act')
	$('.tri').hover(function(e){
		e.stopPropagation();
	})
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

