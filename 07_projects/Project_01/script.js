const body = document.querySelector("body");
const button = document.querySelectorAll(".button");

button.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
    }
    // through if else condition

    // if (e.target.id == 'grey') {
    //   // body.style.backgroundColor = 'grey';
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //     body.style.backgroundColor = e.target.id;
    //   }
    //   if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id;
    //   }
    //   if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id;
    //   }
  });
});
