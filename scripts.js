let psswd = document.querySelector('#password');
let confPsswd = document.querySelector('#conf_password');
let psswdBorder = document.getElementById('password');
let confBorder = document.getElementById('conf_password');
let subForm = document.querySelector(".create-button > button");
let submitButton = document.querySelector(".create-button > button");


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
        psswdBorder.style.border = "" //This is to keep the style we have set in the css file.
        confBorder.style.border = ""

        //Checking for passwords dont match node and removing it from parent if exists
        if (document.querySelectorAll(".fail_text").length > 0){
            let currentDiv = document.querySelector(".user-form");
            let divChildren = currentDiv.childNodes
            divChildren.forEach(node => {
                if(node.className == 'fail_text') {
                    currentDiv.removeChild(node);
                }
            });
        }

        if (submitButton.disabled == true) {
            submitButton.disabled = false;
        }

    }
    
    else {
        if (document.querySelectorAll(".fail_text").length == 0) {
            let notMatched = document.createElement("div");
            notMatched.textContent = "Passwords dont match"
            let currentDiv = document.querySelector(".user-form");
            notMatched.style.fontSize = "1rem"
            notMatched.style.color = "red"
            notMatched.className = "fail_text"
            currentDiv.append(notMatched);
            submitButton.disabled = true;
        }
        

        psswdBorder.style.border = "1px solid red"
        confBorder.style.border = "1px solid red"
    }
}