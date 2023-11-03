const allButtons = document.querySelectorAll('.button')
const body = document.querySelector('body')

allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        
    })
})