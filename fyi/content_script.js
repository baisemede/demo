document.onclick=function(){
    var selection=window.getSelection().toString().trim()//选中的文本信息
    if(selection==='')return
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh&dt=t&q=${selection}`)
    .then(res => res.json())
    .then(result => {
      console.log(result[0] [0] [1]+"翻译为："+result[0] [0] [0])
    })
}