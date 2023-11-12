const date = document.querySelector('.date');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date();

date.innerHTML = currentDate.getDate()
day.innerHTML = weekDays[currentDate.getDay()];

month.innerHTML = months[currentDate.getMonth()];
year.innerHTML = currentDate.getFullYear();