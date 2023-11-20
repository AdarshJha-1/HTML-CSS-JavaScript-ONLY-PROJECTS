const post = document.querySelector('#post-container');
const like = document.querySelector('#love');

post.addEventListener('dblclick', () => {

    like.style.color = "white";
    like.style.transform = "scale(6)";
    like.style.opacity = 0.8

    setTimeout(() => {
    like.style.transform = "scale(0)";
    like.style.opacity = 0
    },500)
    
})