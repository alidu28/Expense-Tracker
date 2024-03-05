document.addEventListener("DOMContentLoaded", function() {
    const addExpenseBtn = document.querySelector('.add-expense-btn');
    const expenseList = document.querySelector('.expense-list');
    const totalExpenses = document.querySelector('.total-expenses h3');

    let totalExpense = 0;

    // Function to add expense
    function addExpense(description, amount) {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <p>${description}</p>
            <p>$${amount.toFixed(2)}</p>
            <button class="delete-expense-btn">X</button>
        `;
        expenseList.appendChild(expenseItem);
    }

    // Function to update total expenses
    function updateTotalExpenses() {
        totalExpenses.textContent = `Total Expense: $${totalExpense.toFixed(2)}`;
    }

    // Event listener for add expense button
    addExpenseBtn.addEventListener('click', function() {
        const description = prompt('Enter expense description:');
        const amount = parseFloat(prompt('Enter expense amount:'));

        if (!description || isNaN(amount) || amount <= 0) {
            alert('Invalid input. Please enter a valid description and amount.');
            return;
        }

        totalExpense += amount;
        addExpense(description, amount);
        updateTotalExpenses();
    });

    // Event delegation for delete expense button
    expenseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-expense-btn')) {
            const expenseItem = event.target.parentElement;
            const amount = parseFloat(expenseItem.children[1].textContent.slice(1));
            totalExpense -= amount;
            expenseItem.remove();
            updateTotalExpenses();
        }
    });
});
