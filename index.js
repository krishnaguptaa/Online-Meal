function validate(){

    var a= document.getElementById("name");
    var b= document.getElementById("email");
    var c= document.getElementById("phone");
    var d= document.getElementById("message");
    if(a.value.trim()=="") {
        alert("Enter the username");
        a.style.border = "2px solid red";
        return false;
    }
    else  if(b.value.trim()=="") {
        alert("Enter the email");
        b1.style.border = "2px solid red";
        return false;
    }
    else if (c.value.trim()=="") {
        c.style.border = "2px solid red";
        return false;
    }
    else if(d.value.trim()==""){
        d.style.border = "2px solid red";
       return false;
    }
    else {

        alert("Submitted sucessfully");
        alert(" Thanku!");
        return true;
    }
}
