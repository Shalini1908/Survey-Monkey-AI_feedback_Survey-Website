
document.querySelector("form").addEventListener("submit",surveymonkey);

function surveymonkey(event){

    event.preventDefault();

 
let a =  document.querySelector("#email").value;
 localStorage.setItem("email",a)    

let x = localStorage.getItem("email") ; 



if(x==a){

    alert("login successful")
}else{

    alert("login failed")
}



}






