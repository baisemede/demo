var result = `/* 
 *面试官你好，我是xxx
 *我将以动画的形式介绍我自己
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 */
*{
  transition:all 1s;
}
#code{
  border:1px solid #79D2B3;
  padding:16px;
}
body{
  background:rgb(222,222,222);
  font-size:16px;
}

/*加上代码高亮*/

.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}
.token.function {
  color: #DD4A68;
}

/*不玩了，我来介绍下我自己吧*/
/*我需要一张白纸*/

#code{
  position:fixed;
  left:0;
  width:50%;
  height:100%;
}
`

var result2=`
#paper{
  position:fixed;
  right:0;
  width:50%;
  height:100%;
  background:#85A1D6;
  display:flex;
  justify-Content:center;
  align-items:center;
}
#paper>.content{
  background:white;
  height:100%;
  width:100%;
}
`

var md=`
#自我介绍

我叫xxx
xxx年xx月xx日出生
xxx学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉JaveScript CSS

# 项目介绍
1.xxx
2.dddd
3.aaaa

# 联系方式
QQ:1234564987
电话：126546546
邮箱:xxxx@xx.com
`

function writeCode(prefix,code,back){
	let domCode=document.querySelector('#code')
	domCode.innerHTML=prefix||''
	let n = 0
	let id = setInterval(() => {
	  n += 1
	  domCode.innerHTML=Prism.highlight(prefix+code.substring(0, n),Prism.languages.css)  /*代码高亮*/
	  styles.innerHTML = prefix+code.substring(0, n)  /*输入css样式*/
	  domCode.scrollTop=domCode.scrollHeight
	  /*砸掉*/
	  if (n >= code.length) {
	    window.clearInterval(id)
	    back.call()
	  }
	}, 10)
}

writeCode('',result,()=>{
	creatrPaper(()=>{
		writeCode(result,result2,()=>{
			 writeMarkdown(md)
		})
	})
})


/*在页面添加 一个div*/
function creatrPaper(back){
	var paper=document.createElement('div')
	paper.id='paper'
	var content=document.createElement('pre')
	content.className='content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	back.call()
}

function writeMarkdown(markdown,back){
	let domCotent=document.querySelector('#paper>.content')
	let n=0;
	let id=setInterval(()=>{
		n+=1
		domCotent.innerHTML=markdown.substring(0, n)  /*代码高亮*/
		domCotent.scrollTop=domCotent.scrollHeight
		 if (n >= markdown.length) {
	    	window.clearInterval(id)
	    	back.call()
	  }
	})
}













































