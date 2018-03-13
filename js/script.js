const quoteElem = document.querySelector('.quote');
const authorElem = document.querySelector('.author');
const citationElem = document.querySelector('.citation');
const yearElem = document.querySelector('.year');

const quotes = [
  {
    quote: 'Bacon ipsum dolor amet ham drumstick flank.',
    source: 'Meatloaf kevin',
    citation: 'Shankle rump pancetta ground round',
    year: '1987',
  },
  {
    quote: 'Drumstick buffalo turducken, pancetta jowl tail capicola biltong doner.',
    source: 'Chuck pork',
  },
  {
    quote: 'Pancetta strip steak corned beef landjaeger shoulder shankle prosciutto.',
    source: 'Turkey kielbasa',
    citation: ' Cupim landjaeger tenderloin',
  },
  {
    quote: 'Meatloaf flank pork belly capicola, chicken porchetta picanha frankfurter sausage filet mignon.',
    source: 'Pork beef',
    year: '1870',
  },
  {
    quote: 'Jerky jowl meatball shank.',
    source: 'Flank turkey',
  },
];

function getRandomQuote(quoteArr) {
  const randomInt = function genRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return quoteArr[randomInt(quoteArr.length)];
}

function printQuote() {
  const quoteObj = getRandomQuote(quotes);

  quoteElem.innerHTML = quoteObj.quote;
  authorElem.innerHTML = quoteObj.source;
  citationElem.innerHTML = quoteObj.citation ? `, ${quoteObj.citation}` : '';
  yearElem.innerHTML = quoteObj.year ? `, ${quoteObj.year}` : '';
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

