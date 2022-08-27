
document.querySelector("form").addEventListener("submit",survey);

function survey(event){

    event.preventDefault();

    
let useremail = document.querySelector("#email").value;
 localStorage.setItem("email",useremail)

 




}