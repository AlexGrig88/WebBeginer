//' use strict';
var money, time;
money = +prompt("Ваш бюджет на месяц?", "30000");
time = prompt("Введите дату в формате YYYY-MM-DD", "1970-01-01");
let appData = {
    budget : money,
    timeData : time,
    expenses  : {
        necessarilyExpense : " ",
        cost : 0
    },
    optionalExpenses : 0,
    income : 0,       //array
    savings : false
}
appData.expenses.necessarilyExpense = prompt("Введите обязательную статью расходов в этом месяце", "bread");
appData.expenses.cost = +prompt("Во сколько обойдется?", "25");

alert("Ваш бюджет на 1 день " + (appData.budget/30));
console.log(appData.timeData);
console.log(appData.budget);
console.log(appData.expenses.necessarilyExpense);
console.log(appData.expenses.cost);
console.log(appData.optionalExpenses);
console.log(appData.income);


