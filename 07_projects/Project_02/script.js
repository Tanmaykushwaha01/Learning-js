const form = document.querySelector('#submit');

// const height = parseInt(document.querySelector('#height').value);
// this will give you empty value because the moment page will load and the script will run the empty value will get stored in the height.
form.addEventListener('click', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  // .value use to get value and we get value in string so we convert into integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please enter the correct height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please enter the correct weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `${bmi}`;
  }
});