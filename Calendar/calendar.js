document.title = 'Simple Calendar';

const date = document.getElementById("date");
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

const today = new Date();

const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.innerHTML = today.getDate();
month.innerHTML = months[today.getMonth()];
day.innerHTML = weeks[today.getDay()];
year.innerHTML = today.getFullYear();
