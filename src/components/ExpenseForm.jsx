import React, { useState } from "react"

function ExpenseForm({onAddExpense}){
    const [expense, setExpenseForm] = useState({amount:"",description:"",category:"", date: ""})

    function handleClick(e){
        e.preventDefault()

        const newExpense = {
            id: crypto.randomUUID(),
            ...expense
        }
        onAddExpense(newExpense)

        setExpenseForm({ amount: "", description: "", category: "", date: "" });
    }

    
    return <div className="expenseForm">
        <form onSubmit={handleClick}>
        <input type="text" name="AmountText" id="AmountInput" placeholder="Amount" onChange={(e)=>setExpenseForm({...expense, amount:e.target.value})} value={expense.amount} required/>

        <input type="text" name="DescriptionText" id="DescriptionInput" placeholder="Description" onChange={(e)=>setExpenseForm({...expense, description:e.target.value})} value={expense.description} required/>

        <select name="categoryList" id="categoryList" onChange={(e)=>setExpenseForm({...expense, category:e.target.value})} value={expense.category} required>
            <option value="" disabled> Select a Category</option>
            <option value="Transport">Transport</option>
            <option value="Health">Health</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Savings">Savings</option>
        </select>

        <input type="date" name="Date" id="DateInput" onChange={(e)=>setExpenseForm({...expense, date: e.target.value})} value={expense.date} required/>

        <button type="submit" id="addNewExpenseBtn">Add New Expense</button>

        </form>
    </div>
}

export default ExpenseForm