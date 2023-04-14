const navRef = document.querySelector(".nav-box");
const navRefBtns = navRef.querySelectorAll(".h3-primary");
const answerBoxRefs = document.querySelectorAll(".answers-box-container");
const questionBoxRefs = document.querySelectorAll(".question-box");

const answerBoxRefOne = document.querySelector(".abc1").children;
const spanRefOne = document.querySelector(".span-summary-1");
const answerBoxRefTwo = document.querySelector(".abc2").children;
const spanRefTwo = document.querySelector(".span-summary-2");
const answerBoxRefThree = document.querySelector(".abc3").children;
const spanRefThree = document.querySelector(".span-summary-3");
const answerBoxRefFour = document.querySelector(".abc4").children;
const spanRefFour = document.querySelector(".span-summary-4");
const answerBoxRefFive = document.querySelector(".abc5").children;
const spanRefFive = document.querySelector(".span-summary-5");

const overlayRef = document.querySelector(".overlay");
const popUpWindowRef = document.querySelector(".pop-up-window");
const checkoutBtn = document.querySelector("#checkout-btn");

const checkoutSummaryTxtRef = document.querySelector("#checkout-summary-txt");
const pPriceOne = document.querySelector(".p-price-1");
const pPriceTwo = document.querySelector(".p-price-2");
const pPriceThree = document.querySelector(".p-price-3");

//GLOBAL VARIABLES

let price = 0;
let indexOne = 0;
let indexTwo = 0;

//ORDER-SUMMARY POP-UP

checkoutBtn.addEventListener("click", () => {
  popUpWindowRef.classList.toggle("pop-up-window-active");
  overlayRef.classList.toggle("active-overlay");
  const txt = document.querySelector("#summary-filled-txt").textContent;
  checkoutSummaryTxtRef.innerText = txt;
  showPrice();
});

overlayRef.addEventListener("click", () => {
  overlayRef.classList.remove("active-overlay");
  popUpWindowRef.classList.remove("pop-up-window-active");
});

//CALCULATING ORDER PRICE

function showPrice() {
  checkActiveVolumeBtn();
  checkActiveDeliveryBtn();
  getPriceMonth();
  getPriceTwoWeeks();
  getPriceWeek();

  const summaryPriceRef = document.querySelector("#price");
  const summaryPriceRefMobile = document.querySelector("#price2");
  summaryPriceRef.innerText = `${price} $/month`;
  summaryPriceRefMobile.innerText = `Checkout - ${price} $/mo`;
}

function getPriceMonth() {
  if (indexOne === 0 && indexTwo === 2) {
    price = 12.0;
  } else if (indexOne === 1 && indexTwo === 2) {
    price = 22.0;
  } else if (indexOne === 2 && indexTwo === 2) {
    console.log("jebać pis");
    console.log(indexOne);
    console.log(indexTwo);
    price = 42.0;
  }
}

function getPriceTwoWeeks() {
  if (indexOne === 0 && indexTwo === 1) {
    price = 9.6 * 2;
  } else if (indexOne === 1 && indexTwo === 1) {
    price = 17.5 * 2;
  } else if (indexOne === 2 && indexTwo === 1) {
    price = 32.0 * 2;
  }
}

function getPriceWeek() {
  if (indexOne === 0 && indexTwo === 0) {
    price = 7.2 * 4;
  } else if (indexOne === 1 && indexTwo === 0) {
    price = 13.0 * 4;
  } else if (indexOne === 2 && indexTwo === 0) {
    price = 22.0 * 4;
  }
}

//CHANGE OF PRICES IN DELIVERY OPTION ACCORDING TO CHOICE OF VOLUME

function getDeliveryPrice() {
  checkActiveVolumeBtn();
  if (indexOne === 0) {
    pPriceOne.innerText =
      "$7.20 per shipment. Includes free first-class shipping.";
    pPriceTwo.innerText =
      "$9.60 per shipment. Includes free first-class shipping.";
    pPriceThree.innerText =
      "$12.00 per shipment. Includes free first-class shipping.";
  } else if (indexOne === 1) {
    pPriceOne.innerText =
      "$13.00 per shipment. Includes free first-class shipping.";
    pPriceTwo.innerText =
      "$17.50 per shipment. Includes free first-class shipping.";
    pPriceThree.innerText =
      "$22.00 per shipment. Includes free first-class shipping.";
  } else if (indexOne === 2) {
    pPriceOne.innerText =
      "$22.00 per shipment. Includes free first-class shipping.";
    pPriceTwo.innerText =
      "$32.00 per shipment. Includes free first-class shipping.";
    pPriceThree.innerText =
      "$42.00 per shipment. Includes free first-class shipping.";
  }
}

function checkActiveVolumeBtn() {
  const boxesChildren = document.querySelector(".abc3").children;
  const boxes = document.querySelector(".abc3");
  const activeBox = boxes.querySelector(".active-option");
  indexOne = [...boxesChildren].indexOf(activeBox);
}

function checkActiveDeliveryBtn() {
  const boxesChildren = document.querySelector(".abc5").children;
  const boxes = document.querySelector(".abc5");
  const activeBox = boxes.querySelector(".active-option");
  indexTwo = [...boxesChildren].indexOf(activeBox);
}

//DISPLAYING FORM FIELDS

navRefBtns.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active-nav-btn");
    const index = [...navRefBtns].indexOf(element);
    answerBoxRefs[index].classList.toggle("d-flex");
  });
});

questionBoxRefs.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("d-flex");
  });
});

//FILLING THE FORM

//#1
[...answerBoxRefOne].forEach((element) => {
  element.addEventListener("click", () => {
    [...answerBoxRefOne].forEach((element) => {
      element.classList.remove("active-option");
    });
    element.classList.toggle("active-option");
    if (element.firstChild.nextSibling.innerText === "Capsule")
      spanRefOne.innerText = "using Capsules";
    else {
      spanRefOne.innerText = `as ${element.firstChild.nextSibling.innerText}`;
    }
  });
});

//#2

[...answerBoxRefTwo].forEach((element) => {
  element.addEventListener("click", () => {
    [...answerBoxRefTwo].forEach((element) => {
      element.classList.remove("active-option");
    });
    element.classList.toggle("active-option");
    spanRefTwo.innerText = element.firstChild.nextSibling.innerText;
  });
});

//#3

[...answerBoxRefThree].forEach((element) => {
  element.addEventListener("click", () => {
    [...answerBoxRefThree].forEach((element) => {
      element.classList.remove("active-option");
    });
    element.classList.toggle("active-option");
    spanRefThree.innerText = element.firstChild.nextSibling.innerText;
    getDeliveryPrice();
  });
});

//#4

[...answerBoxRefFour].forEach((element) => {
  element.addEventListener("click", () => {
    [...answerBoxRefFour].forEach((element) => {
      element.classList.remove("active-option");
    });
    element.classList.toggle("active-option");
    spanRefFour.innerText = element.firstChild.nextSibling.innerText;
  });
});

//#5

[...answerBoxRefFive].forEach((element) => {
  element.addEventListener("click", () => {
    [...answerBoxRefFive].forEach((element) => {
      element.classList.remove("active-option");
    });
    element.classList.toggle("active-option");
    spanRefFive.innerText = element.firstChild.nextSibling.innerText;
  });
});
