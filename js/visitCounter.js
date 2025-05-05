const COUNTER_STORAGE = "counter";

const counter = localStorage.getItem(COUNTER_STORAGE) || "0";
const counterText = document.getElementById("counterValue");
const counterNumber =  +counter + 1;

localStorage.setItem(COUNTER_STORAGE, counterNumber);
counterText.innerHTML = counterNumber;