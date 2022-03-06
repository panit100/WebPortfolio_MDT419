window.onload = pageLoad;
function pageLoad(){
	var form =document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];

    var errormsg = document.getElementById("errormsg");
    var result = true;

    if(lastname.value == ""){
        errormsg.innerText = "required lastname";
        result = false;
    }

    if(gender.value == ""){
        errormsg.innerText = "required gender";
        result = false;
    }

    if(bday.value == ""){
        errormsg.innerText = "required Birthday";
        result = false;
    }

    if(email.value == ""){
        errormsg.innerText = "required Email address";
        result = false;
    }

    if(username.value == ""){
        errormsg.innerText = "required username";
        result = false;
    }

    if(password[0].value != password[1].value){
        errormsg.innerText = "password not match";
        result = false;
    }
    
    return result;
}