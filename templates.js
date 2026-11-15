export const formatPrice = (n) => "$" + n.toFixed(2);

export function chartBar(spending, ratio, day) {
  return `<li class="chart__item ${spending.day === day ? "is-today" : ""}" style="--h: ${ratio}%" tabindex="0">   
     <span class="chart__bar">
       <span class="chart__tooltip">${formatPrice(spending.amount)}</span>
     </span>
     <span class="chart__day">${spending.day}</span>
   </li>`;
}
