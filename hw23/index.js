const options = ["😊", "😄", "😐", "😕", "😢"];

const appElement = document.getElementById("app");

function renderOptions() {
  options.forEach((option, index) => {
    const container = document.createElement("div");
    container.classList.add(
      "mb-2",
      "d-flex",
      "flex-column",
      "align-items-center"
    );

    const smileyElement = document.createElement("button");
    smileyElement.classList.add("btn", "btn-outline-primary", "mb-1");
    smileyElement.innerHTML = option;
    smileyElement.addEventListener("click", () => vote(index));

    const counterElement = document.createElement("span");
    counterElement.classList.add("badge", "badge-secondary");
    counterElement.textContent = 0;

    container.appendChild(smileyElement);
    container.appendChild(counterElement);

    appElement.appendChild(container);
  });
}

function updateCounters() {
  options.forEach((_, index) => {
    const counterElement =
      appElement.querySelectorAll(".badge-secondary")[index];
    counterElement.textContent = getVotesCount(index);
  });
}

function vote(index) {
  votes[index]++;
  updateCounters();
}

function getVotesCount(index) {
  return votes[index];
}

const votes = Array.from({ length: options.length }, () => 0);
renderOptions();
