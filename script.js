const formEl = document.getElementById("form")
const signUpBtnEl = document.getElementById("sign-up-btn")

signUpBtnEl.addEventListener('click', function(e){
    e.preventDefault()
    formEl.style.display = "none";
    document.getElementById("thank-you").style.display = "block";
    document.getElementById('section-title').style.display = "none";
    document.getElementById('subscribe').style.display = "none";
    document.querySelector("section-thanks").innerHTML = 
        `<div>Hi there everyone!</div>`
})