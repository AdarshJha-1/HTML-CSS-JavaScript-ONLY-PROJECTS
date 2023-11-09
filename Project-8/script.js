const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.btn-flex')

let input = "";
let result;
const showResult = () => {
    output.innerHTML = result;
}

buttons.forEach(addEventListener('click', (e) => {
    if (e.target.className === "btn-flex") {
        console.log(e.target.innerHTML);
        input += e.target.innerHTML;
        output.innerHTML = input;
    }
    else if (e.target.className === "equal") {
        result = eval(input);
        input = result;
        showResult();
    }
    else if (e.target.className === "all-clear") {
        output.innerHTML = "";
        input = "";
        result = 0;
    }
    else if (e.target.className === "delete") {
        input = input.slice(0, -1);
        output.innerHTML = input;
    }
}));


