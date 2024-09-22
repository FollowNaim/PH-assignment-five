const totalBalance = document.getElementById("total-balance");
const historyContainer = document.getElementById("history-container");
const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

function updateMoney(e, id) {
  const smallCounter = document.getElementById(id);
  console.log(smallCounter);
  const prevEl = e.target.previousElementSibling;
  const donatedNumber = parseFloat(prevEl.value);
  const prevDonation = parseFloat(smallCounter.innerText);
  smallCounter.innerText = donatedNumber + prevDonation;
  prevEl.value = "";
  decraseBalance(totalBalance, donatedNumber);
}

function decraseBalance(totalBalance, donatedBalance) {
  console.log(totalBalance);
  const total = parseFloat(totalBalance.innerText);
  totalBalance.innerText = total - donatedBalance;
}

function toggleBetween(track) {
  if (track) {
    donationContainer.classList.add("hidden");
    historyContainer.classList.remove("hidden");
    historyContainer.classList.add("flex");
    historyBtn.classList.add("bg-accents", "border-0");
    donationBtn.classList.add("bg-transparent", "btn-outline", "border");
  } else {
    donationContainer.classList.remove("hidden");
    donationContainer.classList.add("flex");
    historyContainer.classList.add("hidden");
    historyBtn.classList.remove("bg-accents", "border-0");
    donationBtn.classList.remove("btn-outline", "bg-transparent");
  }
}

function historyAdd(e) {
  const title = e.target.parentElement.previousElementSibling.children[0];
  const input = e.target.previousElementSibling;
  const date = new Date();
  historyContainer.innerHTML += `
  <div class="p-8 rounded-2xl shadow flex flex-col gap-4">
          <h2 id="history-title" class="font-bold text-lg">
            ${input.value} Taka is Donated for ${title.innerText}
          </h2>
          <p id="history-date" class="text-base font-light">
            Date : ${date.toString()}
          </p>
        </div>
  `;
}
