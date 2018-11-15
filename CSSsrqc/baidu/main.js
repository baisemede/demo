keyword.oninput=function(key){
	var value=keyword.value;
	if(value){
		suggestions.classList.add('active')
	}else{
		suggestions.classList.remove('active')
	}
}