
/*
collectionAll.onclick=function(){
    collectionBar.className="bar state-1"
}
collectionFrame.onclick=function(){
    collectionBar.className="bar state-2"
}
collectionJs.onclick=function(){
    collectionBar.className="bar state-3"
}*/


/*setTimeout(function(){
    siteWelcome.classList.remove('active')
},99)*/
//
let specialTags=document.querySelectorAll('[data-x]')
    for(let i=0; i<specialTags.length; i++){
        specialTags[i].classList.add('offset')           
    }

//
menustate()
window.onscroll=function(roll){
    if(window.scrollY>0){
        topnavbar.classList.add('sticky')
    }else{
        topnavbar.classList.remove('sticky')
    }
    menustate()
}
function menustate(){
    //高亮当前元素
    let specialTags=document.querySelectorAll('[data-x]')
    let minIndex=0
    for(let i=1; i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
        minIndex=i
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id=specialTags[minIndex].id
    let a=document.querySelector('a[href="#'+id+'"]')
    let li=a.parentNode
    let brothersAndme=li.parentNode.children
    for(let i=0; i<brothersAndme.length; i++){
    brothersAndme[i].classList.remove('highlight')
   }
    li.classList.add('highlight')
}

//*****重要*****
let liTags=document.querySelectorAll('nav.menu>ul>li')
for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave=function(x){
         x.currentTarget.classList.remove('active')
    }
}

let aTags=document.querySelectorAll('nav.menu>ul>li>a')

function animate(time) {
requestAnimationFrame(animate);
TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0; i<aTags.length; i++){
    aTags[i].onclick=function(x){
        x.preventDefault()
        let a=x.currentTarget
        let href= a.getAttribute('href')
        let element=document.querySelector(href)
        let top=element.offsetTop

        //跳转缓慢滚动效果,tween 缓动函数
        let currentTop=window.scrollY
        let targetTop=top-80
        let distance=targetTop-currentTop
        var t=Math.abs((distance/100)*300)//取时间绝对值
        if(t>500){t=500}
        var coords = { y: currentTop}; //初始位置
        var tween = new TWEEN.Tween(coords)
            .to({y: targetTop},t)  //结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0,coords.y)
            })
            .start();
    }
}


//  轮播
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
//


//message   数据库
var APP_ID = 'z5ytNfRledisxDASCjjsyBIm-gzGzoHsz';
var APP_KEY = 'BGAEEr17cCKBsrTj7TUGOiAt';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find()
.then(
    function (messages){
        let array=messages.map((item)=>item.attributes)
        array.forEach((item)=>{
            let li=document.createElement('li')
            li.innerText=`${item.name}: ${item.content}`
            let messageList=document.querySelector('#messageList')
            messageList.appendChild(li)                 
        })
    })



let myForm=document.querySelector('#commentsForm')

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content= myForm.querySelector('input[name=content]').value
    let name= myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    if(name && content){
        message.save({
            'name':name,
            'content': content        
        }).then(function(object) {
            let li=document.createElement('li')
            li.innerText=`${object.attributes.name}: ${object.attributes.content}`
            let messageList=document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value
            })
    }else{
        alert('提交失败,请输入姓名和内容.')
    }
})

