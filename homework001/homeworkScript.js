//' use strict';
var money, time;
money = +prompt("Ваш бюджет на месяц?", "30000");
time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [], //array
    savings: false
}
appData.expenses.a1 = prompt("Введите обязательную статью расходов в этом месяце", "bread");
appData.expenses.a3 = +prompt("Во сколько обойдется?", "25");

alert("Ваш бюджет на 1 день " + (appData.budget / 30));