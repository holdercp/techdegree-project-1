const quoteElem = document.querySelector('.quote');
const authorElem = document.querySelector('.author');
const citationElem = document.querySelector('.citation');
const yearElem = document.querySelector('.year');
const bodyElem = document.querySelector('body');

function getRandomQuote(quoteArr) {
  const randomInt = function genRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return quoteArr[randomInt(quoteArr.length)];
}

function getRandomColor() {
  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#ff5722',
    '#795548',
    '#607d8b',
  ];
  return colors[Math.floor(Math.random() * Math.floor(colors.length))];
}

function printQuote() {
  const quoteObj = getRandomQuote(quotes);

  bodyElem.style.backgroundColor = getRandomColor();

  quoteElem.innerHTML = quoteObj.quote;
  authorElem.innerHTML = quoteObj.source;
  citationElem.innerHTML = quoteObj.citation ? `, ${quoteObj.citation}` : '';
  yearElem.innerHTML = quoteObj.year ? `, ${quoteObj.year}` : '';
}

function setAndExecuteTimer(fn, t) {
  fn();
  return setInterval(fn, t);
}

let timer = setAndExecuteTimer(printQuote, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', () => {
  printQuote();
  clearInterval(timer);
  timer = setAndExecuteTimer(printQuote, 10000);
});
