let salary = Number(prompt('Введіть розмір вашої зарплати'))
let premium = salary * 0.15
let tax = (salary + premium) * 0.10
const costs = 190
let total = salary + premium - tax - costs
// console.log(total)
alert(`Залишок: ${total.toFixed(2)} грн.`)