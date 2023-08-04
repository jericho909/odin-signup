const submitButton = document.getElementById("submitButton");
const password = document.getElementById("pword");
const confirmPassword = document.getElementById("confirm-pword");
const forms = document.getElementById("forms");
let passwordCheck;
let errMsgMatch = document.createElement("div");
let errMsgLen = document.createElement("div");
forms.appendChild(errMsgMatch);
forms.appendChild(errMsgLen);

submitButton.addEventListener("click", () => {
    if (password.value === confirmPassword.value) {
        errMsgMatch.textContent = "";
    } else {
        errMsgMatch.className = "error";
        errMsgMatch.textContent = "Your passwords do not match. Please try again."
    }
    
})

submitButton.addEventListener("click", () => {
    if (password.value.length > 8) {
        errMsgLen.textContent = "";
    } else {
        errMsgLen.className = "error";
        errMsgLen.textContent = "Your password is too short. Minimum length is 8 characters."
    }
    
})