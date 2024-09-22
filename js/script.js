const btns = document.querySelectorAll(".addMoney");
const historyTitle = document.getElementById("history-title");
const historyDate = document.getElementById("history-date");
const donationContainer = document.getElementById("donation-container");
const confirmationMessage = document.getElementById("confirmation-message");

let track = false;
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = parseFloat(e.target.previousElementSibling.value);
    console.log(input);
    if (typeof input !== "number" || isNaN(input) === true || input < 0) {
      alert("not a number");
      return;
    }
    historyAdd(e);
    if (e.target.classList.contains("btn1")) {
      updateMoney(e, "small-counter");
    } else if (e.target.classList.contains("btn2")) {
      updateMoney(e, "small-counter2");
    } else {
      updateMoney(e, "small-counter3");
    }
    confirmationMessage.showModal();
  });
});

donationBtn.addEventListener("click", (e) => {
  track = false;
  toggleBetween(track);
  console.log("one", track);
});

historyBtn.addEventListener("click", (e) => {
  track = true;
  toggleBetween(track);
});
