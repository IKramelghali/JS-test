const emailuser = "elghaliikram121@gmail.com";
const pass = "ikram1230";
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailsignup = document.getElementById('email');
const namesignup = document.getElementById('name');
const password = document.getElementById('password');
const signInForm= document.getElementById('signInForm');
const signUpForm=document.getElementById('signUpForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-ZÀ-ÿ\-'\s]{2,40}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

let users = [];
function seterror(input, message) {
    const formcontrol = input.closest("div");
    const small = formcontrol.querySelector("p");
    if (small.classList.contains("text-green-500")) {
        small.classList.remove("text-green-500");
        input.classList.remove("border-green-500");

    }
    small.classList.add("text-red-500");
    input.classList.add("border-red-500");
    small.textContent = message;
}
function setsucces(input, message) {
    const formcontrol = input.closest("div");
    const small = formcontrol.querySelector("p");
    if (small.classList.contains("text-red-500")) {
        small.classList.remove("text-red-500");
        input.classList.remove("border-red-500");

    }
    small.classList.add("text-green-500");
    input.classList.add("border-green-500");
    small.textContent = message;
}
function validinput(input, regex, message1,message2) {
    regex.test(input.value) == true ? (setsucces(input, message1)) : (seterror(input, message2));
}
namesignup.addEventListener('input', function () {
  validinput(namesignup, nameRegex, "champ valid","champ no valid")
})
password.addEventListener('input', function () {
  validinput(password, passwordRegex,"champ valid", "champ no valid")
})
emailsignup.addEventListener('input', function () {
  validinput(emailsignup, emailRegex,"champ valid", "champ no valid")
})
function isFormValid() {
  const inputs =Array.from(signUpForm.elements).filter(el => el.tagName === 'INPUT') ;
  let result = true;
  inputs.forEach(input => {    
    if (input.classList.contains("border-red-500")) {
        result = false;
    }
    });

  return result;
}

// SIGNUP
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if(isFormValid()){
        console.log("kayna");
            const newUser = {
      name: namesignup.value,
      email: emailsignup.value,
      password: password.value
    };
        users.push(newUser);

    console.log('✅ Utilisateur ajouté :', newUser);
    console.log('🧾 Tableau users :', users);
    }
    else{
        console.log("rien");
        
    }
    

});
// SIGNIN
document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const validform = document.getElementById('validform');
    const box = validform.closest('#box');
    if (emailInput.value === emailuser && passwordInput.value === pass) {

        validform.textContent = "Valid form";
        validform.classList.add("text-green-500");
        box.classList.add("shadow-green-600/50");

    }
    else {
        validform.textContent = "Invalid form";
        validform.classList.add("text-red-500");
        box.classList.add("shadow-rose-600/50");
    }
});


