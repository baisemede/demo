!function(){
    var duration=30
    $('.actions').on('click', 'button', function(e){
        let $button=$(e.currentTarget)
        let speed=$button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active');
        switch(speed){
            case '1':
                duration=80
                break
            case '2':
                duration=30
                break
            case '3':
                duration=10
                break
        }
    })

    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
        let n=0;
         setTimeout(function repeat(){
            n+=1
            container.innerHTML=Prism.highlight(code.substring(0, n),Prism.languages.css)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
                setTimeout(repeat,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    
    let code=`
/*
*我来画一个卡比
*/
.preview{
    border:1px solid #eda8b6;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kirby{
    height: 300px;
    width: 300px;
    position: relative;
}
/*
 *首先需要一个身体
 */
.body{
    z-index:- 1;
    position: absolute;
    border: 3px solid #782838;
    width:190px;
    height:190px;
    border-radius: 50%;
    background: #eda8b6;
    left: 50%;
    top:50%;
    margin-left: -95px;
    margin-top: -95px;
}

.face {
    top: 38px;
    left: -6px;
    transform: rotate(-10deg);
    }
/*
 *接下来是卡比的眼睛
 */
.eye{
    height: 42px;
    width:20px;
    background: #782838;
    border-radius: 50%;
    position: absolute;
    margin-top: 40px;
}
/*
 *眼睛里的眼珠子
 */
.eye::before{
    content: '';
    display: block;
    height: 16px;
    width:10px;
    background: #ffffff;
    border-radius:45%;
    position: absolute;
    left: 5px;
    top:6px;
}
.eye::after{
    content: '';
    display: block;
    position: absolute;
    height: 14px;
    width: 12px;
    box-shadow: 0 5px 0 0 #6e9dea;
    border-radius: 70%;
    top:20px;
    left:4px;
}
/*
 *左眼
 */
.eye.left{
    right: 50%;
    margin-right: 28px;
}
/*
 *右眼
 */
.eye.right{
    left:50%;
    margin-left: -6px;
}
/*
 *嘴唇
 */
.mouth{
    position: absolute;
    background: #782838;
    height:20px;
    width:24px;
    left:50%;
    margin-left:-28px;
    top:96px;
    border-radius: 50% / 30% 30% 70% 70%;
}
/*
 *舌头
 */
.mouth::before{
    content: '';
    display: block;
    position: absolute;
    height: 8px;
    width:14px;
    background:#dd4545;
    border-radius: 50%;
    left:5px;
    top:8px;
}
/*
 *红晕
 */
.cheek{
    width:24px;
    height:13px;
    background: #ea6e7e;
    border-radius: 50%;
    position: absolute;
    margin-top:81px;
    left:50%
}
/*
 *左红晕
 */
.left.cheek{
    margin-left: -74px;
}
/*
 *右红晕
 */
.right.cheek{
    margin-left: 12px;
}
/*
 *手臂
 */
.arm{
    z-index: -1;
    background: #eda8b6;
    border-radius: 50%;
    position: absolute;
    border: 3px solid #782838;
}
/*
 *右手
 */
.right.arm{
    width: 79px;
    height:97px;
    margin-left:105px;
    margin-top: -39px;
}
/*
 *左手
 */
.left.arm{
    width: 97px;
    height:79px;
    margin-top: 75px;
    margin-left: -36px;
}
/*
 *脚
 */
.foot{
    background: #dd4545;
    width: 76px;
    height:103px;
    border-radius: 50%;
    position: absolute;
    border: 3px solid #782838;
}
/*
 *左脚
 */
.left.foot{
    margin-top: 107px;
    transform: rotate(-45deg)
}
/*
 *右脚
 */
.right.foot{
    z-index: -1;
    margin-top: 118px;
    margin-left: 102px;
    transform: rotate(-27deg)
}
.body::after{
    content: '';
    display: block;
    position: absolute;
    width: 68px;
    height: 13px;
    background: #eda8b6;
    margin-left: 105px;
    margin-top: 10px;
    transform: rotate(37deg)
}
.body::before{
    content: '';
    display: block;
    position: absolute;
    width: 50px;
    height: 13px;
    background: #eda8b6;
    margin-left: -24px;
    margin-top: 103px;
    transform: rotate(90deg)
} `
    writeCode('',code)
}.call()