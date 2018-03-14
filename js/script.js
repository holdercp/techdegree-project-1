// Initialize HTML elements in variables
const quoteElem = document.querySelector('.quote');
const authorElem = document.querySelector('.author');
const citationElem = document.querySelector('.citation');
const yearElem = document.querySelector('.year');
const tagsElem = document.querySelector('.tags');
const bodyElem = document.querySelector('body');

// Keep track of used quotes as to not repeat them until all have been displayed
let usedIndexes = [];

function genRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomQuote(quoteArr) {
  let randomInt;

  // Check to see if all quotes have been used, reset index array if so
  if (usedIndexes.length === quoteArr.length) {
    usedIndexes = [];
  }

  // Generate a random index
  // If it's already been used this cycle, keep generating
  do {
    randomInt = genRandomInt(quoteArr.length);
  } while (usedIndexes.includes(randomInt));

  usedIndexes.push(randomInt);

  return quoteArr[randomInt];
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
  return colors[genRandomInt(colors.length)];
}

// Build HTML for quote tags; accounts for multiple tags
function displayTags(quoteObject) {
  let html = '';
  for (let i = 0; i < quoteObject.tags.length; i += 1) {
    if (i > 0) {
      html += ', ';
    }
    html += `<li>${quoteObject.tags[i]}</li>`;
  }
  return html;
}

function printQuote() {
  // Variable quotes is defined in js/quotes.js
  const quoteObj = getRandomQuote(quotes);

  bodyElem.style.backgroundColor = getRandomColor();

  // Change just the inner HTML to keep things clean and tidy
  quoteElem.innerHTML = quoteObj.quote;
  authorElem.innerHTML = quoteObj.source;

  // Empty out optional properties if they don't exist, or display them if they do
  citationElem.innerHTML = quoteObj.citation ? `, ${quoteObj.citation}` : '';
  yearElem.innerHTML = quoteObj.year ? `, ${quoteObj.year}` : '';
  tagsElem.innerHTML = quoteObj.tags ? displayTags(quoteObj) : '';
}

// Sets and executes a setInterval function to make things easy
function setAndExecuteInterval(fn, time) {
  fn();
  return setInterval(fn, time);
}

// Start the first timer and populate HTML with quote on page load
let timer = setAndExecuteInterval(printQuote, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', () => {
  // "Reset" timer when quote is manually changed
  clearInterval(timer);
  timer = setAndExecuteInterval(printQuote, 10000);
});
