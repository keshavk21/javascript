# Project Related To DOM

## Project Link
https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

# Solution Code

## Project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript
const form = document.querySelector('form');
// this use case will give you
// const heigth = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `${bmi} <br>Under Weight</br>`;
    } else if (18.6 <= bmi && bmi< 24.9) {
      results.innerHTML = `${bmi} <br>Normal Range</br>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `${bmi} <br>Over Weight</br>`;
    }
  }
});

```

## Project 3

```Javascript
document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);

```