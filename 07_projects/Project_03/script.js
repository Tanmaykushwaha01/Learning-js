const clock = document.getElementById('clock');

// const time = new Date();
// console.log(time.toLocaleTimeString());
// this will give you the current time at the point when the script run.

setInterval(function () {
  let date = new Date();
  // console.log(time.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
