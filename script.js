const userName = document.getElementById('userName');
const password = document.getElementById("password");
const form = document.getElementById("form");
const nameError = document.getElementById("nameError");
const passwordError = document.getElementById("passwordError");




function checkUsername(){
    if(!userName.value){
        nameError.style.display= 'block';
    }else{
        nameError.style.display='none';
    }
}


function checkPassword(){
    if(!password.value){
        passwordError.style.display= 'block';
    }else{
        passwordError.style.display='none';
    }
}


function loggedIn(){
    if(password.value && userName.value){
        alert("Welcome ")
    }
}

form.addEventListener("submit" , (eve)=>{
    let message = [];
    eve.preventDefault(); 

    if(!userName.value){
        message.push('userName')   
    }
    if(!password.value){
        message.push('password')   
    }


    if(message.indexOf('userName') > -1){
        nameError.style.display='block';
        nameError.innerHTML = ['required *'];
    }
    
    if(message.indexOf('password') > -1){
        passwordError.style.display='block';
        passwordError.innerHTML = ['required *'];
    }
    
})













