const friend_status = document.querySelector('#status');
const button = document.querySelector('#btn');
let check = 0;



button.addEventListener('click', () => {
    if(check == 0){
        friend_status.innerHTML = "Friends";
        friend_status.style.color = "green";
        button.innerHTML = "Remove";
        button.style.backgroundColor = "red";
        check = 1;
    }
    else{
        friend_status.innerHTML = "Stranger";
        friend_status.style.color = "Red";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "green";
        check = 0;
    }
})