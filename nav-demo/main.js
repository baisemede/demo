	//1.初始化数据
	var hashA = init()
	var keys = hashA['keys']
	var hash = hashA['hash']

	//2.生成键盘
	//遍历Keys，生成kbd标签
	generateKeyboard(keys, hash)

	//3.监听键盘事件
	listenToKeyborad(hash)

	//封装函数
	function getFromLocalStorage(name) {
	    return JSON.parse(localStorage.getItem(name) || 'null')
	}

	function tag(tagName) {
	    return document.createElement(tagName)
	}

	function generateKeyboard(keys, hash) {
	    for (var index = 0; index < keys['length']; index = index + 1) {
	        var div1 = tag('div') /*创建一个div*/
	        div1.className = 'row'

	        rng.appendChild(div1) /*把div放入ID为rng的元素中*/

	        var row = keys[index]
	        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
	            var span = createSpan(row[index2])

	            var buttonX = createbutton(row[index2])

	            var img = createImg(hash[row[index2]])

	            var kbd = tag('kbd') /*创建一个kdb*/
	            kbd.className = 'key'
	            kbd.appendChild(span)
	            kbd.appendChild(img)
	            kbd.appendChild(buttonX)

	            div1.appendChild(kbd) /*把kbd放入div1中*/
	        }
	    }
	}

	function init() {
	    var keys = {
	        '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
	        '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
	        '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
	        length: 3

	    }
	    var hash = {
	        'q': 'qq.com',
	        'w': 'weibo.com',
	        'e': 'eve.com',
	        'b': 'bilibili.com',
	        'i': 'iqiyi.com',
	        'z': 'zhihu.com'
	    }
	    //取出localStorage中的zzz对应的hash
	    var hashInLocalStorage = getFromLocalStorage('zzz')
	    if (hashInLocalStorage) {
	        hash = hashInLocalStorage
	    }
	    return {
	        'keys': keys,
	        'hash': hash
	    }
	}

	function createSpan(textContent) {
	    var span = tag('span')
	    span.textContent = textContent
	    span.className = 'text'
	    return span
	}

	function createbutton(id) {
	    var buttonX = tag('button')
	    buttonX.textContent = 'E'
	    buttonX.id = id //给按钮一个标记

	    buttonX.onclick = function (info) {
	        var button2 = info['target']
	        var img2 = button2.previousSibling
	        var key = button2['id'] //获取用户点击按钮所对应的key
	        var a = prompt('请输入一个网址') //弹出一个输入框
	        hash[key] = a //修改key所对应的内容,hash变更

	        img2.src = 'http://' + a + '/favicon.ico'
	        img2.onerror = function (ico) {
	            ico.target.src = '//i.loli.net/2018/09/16/5b9ddc699b367.png'
	        }

	        localStorage.setItem('zzz', JSON.stringify(hash)) //只要hash改变就存入
	        console.log(hash)
	    }
	    return buttonX
	}

	function createImg(domain) {
	    //获取网站的ico图片
	    img = tag('img')
	    if (domain) {
	        img.src = 'http://' + domain + '/favicon.ico'
	    } else {
	        img.src = '//i.loli.net/2018/09/16/5b9ddc699b367.png'
	    }
	    //如果报错
	    img.onerror = function (ico) {
	        ico.target.src = '//i.loli.net/2018/09/16/5b9ddc699b367.png'
	    }
	    return img
	}

	function listenToKeyborad(hash) {
	    document.onkeypress = function (info) {
	        // body...
	        var key = info['key'] //获取用户按的键
	        var website = hash[key] //用户按键对应的网站
	        //location.href='http://'+website  //把当前地址换成新的地址
	        window.open('http://' + website, '-blank') //在新窗口打开网址
	    }
	}