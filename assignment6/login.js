window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username =  urlParams.get("username");
	const password =  urlParams.get("password");

	var inputUsername = document.forms["myLogin"]["username"];
    var inputPassword = document.forms["myLogin"]["password"];

	var result = true;

	if(inputUsername.value != username){
		alert("Username not match. Please login again");
		return false;
	}

	if(inputPassword.value != password[0]){
		alert("Password not match. Please login again");
		return false;
	}

	if(result == true){
		alert("Pass");
	}

	return result;
}

			