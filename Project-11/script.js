const scrollBar = document.querySelector('.gallery');
const left = document.querySelector('#bkbtn');
const right = document.querySelector('#nexbtn');

scrollBar.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollBar.scrollLeft += e.deltaY;
    scrollBar.style.scrollBehavior = "auto"
});

left.addEventListener('click', () => {
    scrollBar.scrollLeft -= 900;
    scrollBar.style.scrollBehavior = "smooth"
});

right.addEventListener('click', () => {
    scrollBar.scrollLeft += 900;
    scrollBar.style.scrollBehavior = "smooth"
});