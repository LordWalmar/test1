window.onload = function(){
	var sign = document.getElementById('sign_in');
	sign.onclick = showSign;
	var x = document.getElementById('imgR');
	x.onclick = hideSign;
	var x = document.getElementById('reset');
	reset.onclick = resetRassword;
	var login = document.getElementById('login');
	login.onblur = blur1;
	var password = document.getElementById('password');
	password.onblur = blur2;
	var myForm = document.getElementById('myForm');
	myForm.onsubmit = checkForm;
}

function showSign(){
	var shadow = document.getElementById('shadow');
	var form = document.getElementById('sign');
	var wrapper = document.getElementById('sign_wrapper');
	wrapper.style.display = 'block';
	shadow.style.display = 'block';
	form.style.display = 'block';
	return false;
}

function blur1(){
	var p1=document.getElementById('wrongEmail');
	var regV= /[-\w.]+@[A-z\d]+\.[A-z]{2,4}/i;
	if(!login.value){
			login.className = 'empty';
			login.focus();
	p1.style.opacity = '1'
	p1.firstChild.nodeValue = "Email is empty."
	opacityLow('wrongEmail');
	}else if (login.value.search(regV) == -1){
			login.className = 'empty';
			login.focus();	
			p1.firstChild.nodeValue = "Email is incorrect"
			p1.style.opacity = '1'
			opacityLow('wrongEmail');
	}else login.className = 'right';
}

function blur2(){
	var p2=document.getElementById('wrongPassword');
	if(!password.value){
			password.className = 'empty';
			password.focus();
			p2.style.opacity = '1'
			opacityLow('wrongPassword');
	}else password.className = 'right';
}

function opacityLow(name){
	var p = document.getElementById(name);
	var op = p.style.opacity;
	if (op != 0){
		p.style.opacity = op - 0.05;
		setTimeout("opacityLow('"+name+"')", 200)
	}
}

function hideSign(){
	var shadow = document.getElementById('shadow');
	var form = document.getElementById('sign');
	var wrapper = document.getElementById('sign_wrapper');
	shadow.style.display = 'none';
	wrapper.style.display = 'none';
	form.style.display = 'none';
}
function resetRassword(){
	var password = document.getElementById('password');
	document.getElementById('password').value ='';
	return false;
}


	function checkForm(){
		var login = document.getElementById('login');
		var password = document.getElementById('password');
		if (!(login.classList.contains('right') && password.classList.contains('right'))){
			return false;
		}
	}