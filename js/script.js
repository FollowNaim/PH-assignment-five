const btns = document.querySelectorAll(".addMoney");
const historyTitle = document.getElementById("history-title");
const historyDate = document.getElementById("history-date");
const donationContainer = document.getElementById("donation-container");
const confirmationMessage = document.getElementById("confirmation-message");

let track = false;

donationContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("addMoney")) {
    const prevVal = e.target.previousElementSibling.value;
    const input = parseFloat(e.target.previousElementSibling.value);
    console.log(input);
    console.log(Number(prevVal.toString()));
    if (
      typeof input !== "number" ||
      isNaN(input) === true ||
      input <= 0 ||
      input !== Number(prevVal.toString()) ||
      input > Number(totalBalance.innerText)
    ) {
      alert("Please Type a Valid Number !!");
      e.target.previousElementSibling.value = "";
      return;
    }
    historyAdd(e);
    confirmationMessage.showModal();
    if (e.target.classList.contains("btn1")) {
      updateMoney(e, "small-counter");
    } else if (e.target.classList.contains("btn2")) {
      updateMoney(e, "small-counter2");
    } else {
      updateMoney(e, "small-counter3");
    }
  }
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
