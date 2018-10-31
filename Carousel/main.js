let n
initialization()
setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (alter)=>{
      makeEnter($(alter.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
},3000)



//封装函数
function getImage(n){
  return $(`.images > img:nth-child(${count(n)})`)
}


function initialization(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}


function count(n){
  if(n>5){
    n = n%5
    if (n===0){
      n =5
    }
  } 
  return n
}