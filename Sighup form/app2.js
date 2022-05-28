function validateForm() {
    let username = document.forms.myform.username.value
    let password = document.forms.myform.password.value
    let input = document.getElementById("input")
    let pass = document.getElementById("password")
    let msg = document.getElementById('msg')
    let pmsg = document.getElementById('pmsg')


    if (username == "") {
        msg.innerHTML = "*Username must be filled out";
        msg.style.display = "block"
        input.style.borderColor = "red"
        return false;
    } else if (username != "") {
        input.style.borderColor = "green"
    }


    if (password == "") {
        pmsg.innerHTML = "*Password should not be Empty"
        pmsg.style.display = "block"
        pass.style.borderColor = "red"
        return false;
    } else {
        alert(`Hi ${username} Login Successfull`)
        location.reload()
    }
}
let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})