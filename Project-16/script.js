const URL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const button = document.querySelector('button')
const img = document.querySelector('img');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('input').value;
    if(inputValue === ""){
        alert("Enter some Text or URL")
    }
    else{
        img.setAttribute('src', `${URL} + ${inputValue}`)
    }
})