import { chartBar, formatPrice } from "./templates.js";
const chartError = document.getElementById("chart-error");
const chartBars = document.getElementById("chart");

let spendings = [];
const today = new Date().getDay();
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const getRatio = ({ amount }, max) => (amount / max) * 100;

function render() {
  const max = Math.max(...spendings.map((x) => x.amount));
  chartBars.innerHTML = spendings
    .map((spending) => chartBar(spending, getRatio(spending, max), days[today]))
    .join("");
}

try {
  const res = await fetch("./data.json");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  spendings = await res.json();
  render();
} catch (err) {
  console.error(err);
  chartError.textContent =
    "Couldn't load chart information. Please refresh the page.";
  chartError.hidden = false;
}
