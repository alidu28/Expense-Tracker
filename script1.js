const addExpenseBtn = document.querySelector(".add-expense-btn");
const expenseList = document.querySelector(".expense-list");
const totalExpenses = document.querySelector(".total-expenses h3");

let expenses = [];
let total = 0;

function addExpense() {
  const description = prompt("Enter expense description");
  const amount = parseFloat(prompt("Enter expense amount"));

  if (description && amount) {
    const expense = {
      description: description,
      amount: amount,
    };

    expenses.push(expense);
    total += amount;
    displayExpenses();
  }
}

addExpenseBtn.addEventListener("click", addExpense);

function displayExpenses() {
  let html = "";
  expenses.forEach((expense) => {
    html += `           <div class="expense-item">
        <div class="expense-item-description">${expense.description}</div>
        <div class="expense-item-amount">${expense.amount}</div>
        <button class="delete-expense-btn">&times;</button>
    </div>`;
  });

  expenseList.innerHTML = html;
  totalExpenses.innerHTML = `Total Expenses: Gh¢ ${total}`;
}

function deleteExpense(index) {
  total -= expenses[index].amount;
  expenses.splice(index, 1);
  displayExpenses();
}

expenseList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-expense-btn")) {
    const index = Array.from(e.target.parentNode.parentNode.children).indexOf(
      e.target.parentNode
    );
    deleteExpense(index);
  }
});
