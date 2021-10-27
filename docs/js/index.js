//LoginPage Listner

const passwordText = document.getElementById("pass-text");
const passwordBox = document.getElementById("pass-box")
const loginPage = document.getElementById("login-page")

passwordText.addEventListener("animationend", (ev) => {
    passwordBox.style = "block"
    passwordText.value = "12345678"
})

passwordBox.addEventListener("animationend", (ev) => {
    passwordBox.style.width = "0%"
})

loginPage.addEventListener("animationend", (ev) => {
    if (ev.animationName == "loginBox") {
        loginPage.hidden = true
    }
})