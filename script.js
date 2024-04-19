var cardInput = document.querySelector(".card-holder-input");
var cardName = document.querySelector(".card-holder-name");
var cardNumber = document.querySelector(".card-number-input");
var card = document.querySelector(".card-number");
var monthInput = document.querySelector(".month-input");
var expMonth = document.querySelector(".exp-month");
var yearInput = document.querySelector(".year-input");
var expYear = document.querySelector(".exp-year");
var cvvInput = document.querySelector(".cvv-input");
var cardInner = document.querySelector(".card-inner");
var cvvBox = document.querySelector(".cvv-box");
var error2 = document.querySelector(".error2");
var error1 = document.querySelector(".error1");

cardInput.oninput = () => {
  cardName.innerText = cardInput.value;
};

monthInput.oninput = () => {
  expMonth.innerText = monthInput.value;
};

yearInput.oninput = () => {
  expYear.innerText = yearInput.value;
};

cvvInput.onmouseenter = () => {
  cardInner.style.transform = "rotateY(-180deg)";
};

cvvInput.onmouseleave = () => {
  cardInner.style.transform = "rotateY(0deg)";
  error2.style.display = "none";
};

cvvInput.oninput = () => {
  var cntrl = /^\d{3}$/;
  if (!cntrl.test(cvvInput.value)) {
    error2.style.display = "inline-block";
  } else {
    error2.style.display = "none";
  }
  cvvBox.innerText = cvvInput.value;
};

cardNumber.oninput = () => {
  card.innerHTML = "";
  var cntrl2 = /^\d{16}$/;
  if (!cntrl2.test(cardNumber.value)) {
    error1.style.display = "inline-block";
  } else {
    error1.style.display = "none";
  }
  var cleanedInput = cardNumber.value.replace(/\s/g, "");
  for (var i = 0; i < cleanedInput.length; i += 4) {
    var chunk = cleanedInput.substring(i, i + 4);
    var p = document.createElement("p");
    p.innerText = chunk;
    card.appendChild(p);
  }
};

cardNumber.onmouseleave = () => {
  error1.style.display = "none";
};
