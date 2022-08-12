function Counter() {
  // App state
  let countDisplay;
  let count = 0;
  const state = {
    get count() {
      return count;
    },
    set count(newCount) {
      count = newCount;
      countDisplay.innerText = newCount;
    },
  };

  const counterContainer = document.createElement("div");
  // View
  counterContainer.innerHTML = `
    <button class="action-btn increment">+</button>
    <button class="action-btn decrement">-</button>
    <span class="count-display">${state.count}</span>
  `;

  countDisplay = counterContainer.querySelector(".count-display");
  const incrementBtn = counterContainer.querySelector(".increment");
  incrementBtn.addEventListener("click", () => {
    state.count++;
  });
  const decrementBtn = counterContainer.querySelector(".decrement");
  decrementBtn.addEventListener("click", () => {
    state.count--;
  });

  return counterContainer;
}

const createCounterBtn = document.createElement("button");
createCounterBtn.innerText = "create counter";
createCounterBtn.addEventListener("click", () => {
  const counter = Counter();
  document.body.append(counter);
});

document.body.append(createCounterBtn);
