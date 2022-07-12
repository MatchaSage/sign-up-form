let psswd = document.querySelector('#password');
let confPsswd = document.querySelector('#conf_password');
let psswdBorder = document.getElementById('password');
let confBorder = document.getElementById('conf_password');


let user_pass = String();
let conf_pass = String();

psswd.addEventListener('input', function() {
    user_pass = this.value
    checkPass(user_pass, conf_pass)
});

confPsswd.addEventListener('input', function() {
    conf_pass = this.value
    checkPass(user_pass, conf_pass)
});

function checkPass(user_pass, conf_pass) {

    if (user_pass == conf_pass) {
        psswdBorder.style.border = "1px solid rgb(36, 36, 36)"
        confBorder.style.border = "1px solid rgb(36, 36, 36)"
    }
    
    else {
        psswdBorder.style.border = "1px solid red"
        confBorder.style.border = "1px solid red"
    }
}