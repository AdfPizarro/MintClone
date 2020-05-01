var inputEmail= document.getElementById("email");
var inputEmailSection= document.getElementById("section-email");
var inputPhone= document.getElementById("phone");
var inputPhoneSection= document.getElementById("section-phone");
var inputPassword= document.getElementById("password");
var inputPasswordSection= document.getElementById("section-password");

inputEmail.onfocus= function(){
    inputEmailSection.setAttribute("style","box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6); border: 1px solid #52A8EC; ");
    console.log("something");
}
inputPhone.onfocus= function(){
    inputPhoneSection.setAttribute("style","box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6); border: 1px solid #52A8EC; ");
    console.log("something");
}
inputPassword.onfocus= function(){
    inputPasswordSection.setAttribute("style","box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6); border: 1px solid #52A8EC; ");
    console.log("something");
}

inputEmail.onblur= function(){
    inputEmailSection.setAttribute("style","");
    console.log("something");
}
inputPhone.onblur= function(){
    inputPhoneSection.setAttribute("style","");
    console.log("something");
}
inputPassword.onblur= function(){
    inputPasswordSection.setAttribute("style","");
    console.log("something");
}
