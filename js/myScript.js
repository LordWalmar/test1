window.onload = function(){
	var sign = document.getElementById('sign_in');
	sign.onclick = showSign;
	var x = document.getElementById('imgR');
	x.onclick = hideSign;
	var x = document.getElementById('reset');
	reset.onclick = resetRassword;
	
	var myForm = document.getElementById('myForm');
	myForm.onsubmit = checkForm;
}

function showSign(){
	var shadow = document.getElementById('shadow');
	var form = document.getElementById('sign');
	shadow.style.display = 'block';
	form.style.display = 'block';
	return false;
}

function hideSign(){
	var shadow = document.getElementById('shadow');
	var form = document.getElementById('sign');
	shadow.style.display = 'none';
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
		var regV= /[-\w.]+@[A-z\d]+\.[A-z]{2,4}/i;
		if(!login.value){
			alert("Field 'email' is empty");
			login.className = 'empty';
			login.focus();
			return false
	    }
		if(login.value.search(regV) == -1){
			alert('Email is not correct');
			login.className = 'empty';
			login.focus();
			return false;
		}
		if(!password.value){
			alert("Field 'password' is empty");
			password.className = 'empty';
			password.focus();
			return false
		}
	}