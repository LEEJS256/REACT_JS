const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const greeting      = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
// const link = document.querySelector("a");

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);

    paintGreeting(userName);
}

function paintGreeting(arg_userName){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${arg_userName}` ;
}

const saeveUserName = localStorage.getItem(USERNAME_KEY);
if(saeveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onSubmit);
}else {
    paintGreeting(saeveUserName);
}

