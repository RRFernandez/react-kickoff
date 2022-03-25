const createCounter = () => {
  const counterContainer = document.createElement("div");
  counterContainer.className = "counter";

  const createState = () => {
    let count = 0;
    return {
      get count() {
        return count;
      },
      set count(newCount) {
        count = newCount;
        countDisplay.innerText = newCount;
      },
    };
  };
  const state = createState();
  let countDisplay;

  counterContainer.innerHTML = `
  <button class="action-btn increment">+</button>
  <button class="action-btn decrement">-</button>
  <span class="count-display">${state.count}</span>
  `;

  countDisplay = counterContainer.querySelector(".count-display");
  const incrementBtn = counterContainer.querySelector(".increment");
  incrementBtn.addEventListener("click", () => {
    state.count = state.count + 1;
  });

  const decrementBtn = counterContainer.querySelector(".decrement");
  decrementBtn.addEventListener("click", () => {
    state.count = state.count - 1;
  });

  return counterContainer;
};

const counterContainer = document.createElement("div");
counterContainer.className = "counter-container";

const createCounterBtn = document.createElement("button");
createCounterBtn.innerText = "Create Counter";
createCounterBtn.addEventListener("click", () => {
  counterContainer.append(createCounter());
});

document.body.append(createCounterBtn);
document.body.append(counterContainer);
