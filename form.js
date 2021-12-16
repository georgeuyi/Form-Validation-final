const names = document.querySelector('#name')
const email = document.querySelector('#email')
const token = document.querySelector('#token')
const checkbox = document.querySelector('#checky')
const warning = document.querySelector('#warning')
const submitBtn = document.querySelector('#btn')

function error (color) {
    form.style.backgroundColor = color
}

const validateForm = (event) => { 
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (names.value.length < 3 || names.value === "") {
        error("#fa5959")
        warning.textContent = "PLEASE ENTER A VALID NAME!!!"; 
            event.preventDefault()
    }   else if (!validation.test(email.value)) {
        error("#fa5959")
        warning.textContent = "PLEASE ENTER A VALID EMAIL!!!"
        event.preventDefault()
    } 
    else if ((token.value == "") || (token.value.length <  8)) {
        error('#fa5959')
        warning.textContent = "INVALID TOKEN!!!"
            event.preventDefault()
    } 
    else if (!checkbox.checked) {
        error('black')
        warning.textContent = "YOU MUST AGREE TO THE PRIVACY POLICY"
        event.preventDefault()
    }   
    else { 
        error('#fa5959')
        return true
    }  
}

submitBtn.addEventListener("click", validateForm)
