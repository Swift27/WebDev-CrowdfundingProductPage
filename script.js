const paymentWindow = document.querySelector(".payment");
const thankyouWindow = document.querySelector(".thank-you");

const body = document.querySelector("body");
const headerImg = document.querySelectorAll(".header-image");
const container = document.querySelector(".container");

const inputFields = document.querySelectorAll(".payment-widget-selected input");
const checkboxes = document.querySelectorAll(".checkbox");

const inactiveElements = document.querySelectorAll(".inactive");

const bookmarkCircle = document.querySelectorAll(".bookmark-circle");
const bookmarkLabel = document.querySelectorAll(".bookmark-label");
const bookmarkText = document.querySelector("#bookmark-desktop-text");

let selectedCheckbox;
let bookmarked = false;

function backProjectClicked() {
  paymentWindow.style.display = "block";
  darkenBackground();
  window.scrollTo(0, 0);
}

function bookmarkClicked() {
  if (bookmarked) {
    bookmarkCircle.forEach((elem) => (elem.style.fill = "#2F2F2F"));
    bookmarkLabel.forEach((elem) => (elem.style.fill = "#B1B1B1"));
    bookmarkText.textContent = "Bookmark";
    bookmarkText.style.color = "hsl(0, 0%, 48%)";
  } else {
    bookmarkCircle.forEach((elem) => (elem.style.fill = "hsl(176, 50%, 47%)"));
    bookmarkLabel.forEach((elem) => (elem.style.fill = "#ffffff"));
    bookmarkText.textContent = "Bookmarked";
    bookmarkText.style.color = "hsl(176, 50%, 47%)";
  }
  bookmarked = !bookmarked;
}

function closeClicked() {
  lightenBackground();
  paymentWindow.style.display = "none";
}

function continueClicked(num) {
  if (num != selectedCheckbox) checkboxSelected(num);
  let input = inputFields[num].value;
  if (input < 0 || typeof num != "number") {
    window.alert("No valid input!");
    return;
  }

  switch (num) {
    case 0:
      showThankYou();
      break;
    case 1:
      if (input < 25) {
        window.alert("You need to pledge at least $25 for this offer!");
        return;
      } else {
        showThankYou();
        break;
      }
    case 2:
      if (input < 75) {
        window.alert("You need to pledge at least $75 for this offer!");
        return;
      } else {
        showThankYou();
        break;
      }
    case 3:
      if (input < 200) {
        window.alert("You need to pledge at least $200 for this offer!");
        return;
      } else {
        showThankYou();
        break;
      }
    default:
      window.alert("No valid input!");
      return;
  }
}

function darkenBackground() {
  body.style.backgroundColor = "#737373";
  headerImg.forEach((img) => (img.style.filter = "brightness(50%)"));
  container.style.filter = "brightness(50%)";
}

function lightenBackground() {
  body.style.backgroundColor = "#f2f2f2";
  headerImg.forEach((img) => (img.style.filter = "brightness(100%)"));
  container.style.filter = "brightness(100%)";
}

function deactivate() {
  inactiveElements.forEach(function (elem) {
    elem.disabled = true;
    elem.style.opactiy = "50%";
  });
  checkboxSelected(0);
}

function showThankYou() {
  paymentWindow.style.display = "none";
  thankyouWindow.style.display = "block";
  darkenBackground();
}

function checkboxSelected(num) {
  checkboxes.forEach((box) => (box.checked = false));
  if (num == selectedCheckbox) checkboxes[num].checked = false;
  else checkboxes[num].checked = true;
  selectedCheckbox = num;
}

function thankyouClose() {
  lightenBackground();
  thankyouWindow.style.display = "none";
}

function selectReward(num) {
  checkboxSelected(num);
  backProjectClicked();
}
