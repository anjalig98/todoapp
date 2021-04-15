let usrname= document.getElementById("userName");
let pwd= document.getElementById("password");
let plabel= document.getElementById("usrnameLabel");
let ulabel= document.getElementById("pwdLabel");
let frmId=document.getElementById("formid");

function validate(home) {
 if((usrname.value!="admin")||(pwd.value!="12345"))
 {
    plabel.innerHTML="Invalid username or password!!"
    ulabel.innerHTML="Please enter correct username and password!!"
    plabel.style.color="red";
    ulabel.style.color="red";
    return false;
 }
 else{
     home();
    //  return true;
 }
}

function homepage(){
  frmId.setAttribute("action","./html/home.html");
  // plabel.style.color="green";
  // ulabel.style.color="green";
  // plabel.innerHTML="Invalid username or password!!"
  // ulabel.innerHTML="Please enter correct username and password!!"
}

function validation(){
    validate(homepage);
}