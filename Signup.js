
document.querySelector("form").addEventListener("submit",survey);

function survey(event){

    event.preventDefault();

    
let useremail = document.querySelector("#email").value;
 localStorage.setItem("email",useremail)

 


let x = localStorage.getItem("email") ; 



if(useremail == x){

    alert("Sign Up successful")
}else{

    alert("Sign Up failed")
}




}


