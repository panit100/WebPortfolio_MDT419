var topic1;
var comment1; 
var comment2;

window.onload = setVariable;

function setVariable(){
    topic1 = document.getElementById("topic1");
    comment1 = document.getElementById("comment1");
    comment2 = document.getElementById("comment2");
}

function postFunction(){
    var text = document.getElementById("text1").value;

    if(topic1.innerText == ""){
        topic1.innerText = text;
    }else if(comment1.innerText == ""){
        comment1.innerText = text;
    }else if(comment2.innerText == ""){
        comment2.innerText = text;
    }

    document.getElementById("text1").value = "";
}

function clearFunction(){
    topic1.innerText = null;
    comment1.innerText = null;
    comment2.innerText = null;
}

