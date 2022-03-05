const formPw = document.getElementById('form-pw')
const submitPw = document.getElementById('submit-pw')
const formEmail = document.getElementById('form-email')

const send = () => {
    formPw.style.display = "flex";
    submitPw.style.display = "block";
    formEmail.style.display = "none";
}