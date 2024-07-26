("use strict");

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};

// quotes
const quotes = [
  {
    quote: "The only sin is ignorance",
    source: "Christopher Marlowe",
  },
  {
    quote:
      "You don't have to control your thoughts. You just have to stop letting them control you.",
    source: "— Dan Millman",
  },
  {
    quote:
      "It is not the bruises on the body that hurt. It is the wounds of the heart and the scars on the mind.",
    source: "-Aisha Mirza",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "If you have a garden and a library, you have everything you need",
    source: "Marcus Tullius Cicero",
  },
  {
    quote: "Truth comes out in wine",
    source: "Pliny the Elder",
  },
  {
    quote: "Everything in the universe is within you. Ask all from yourself",
    source: "Rumi",
  },
  {
    quote:
      "When I get a little money I buy books; and if any is left I buy food and clothes",
    source: "Desiderius Erasmus",
  },
];

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = `-${random.source}`;
}

randomQuote();

const getStartedButton = document.querySelector(".get-started-btn");
function getStarted() {
  window.scrollTo(0, 1000);
}

const backToTop = document.querySelector(".gobackup");
function goTop() {
  window.scrollTo(0, -10000);
}
