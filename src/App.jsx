import React, { useEffect,useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import Filter from "./components/Filters"
import Summary from "./components/Summary"
import Chart from "./components/Chart"
import DarkModeToggle from "./components/DarkModeToggle"
import "./App.css"

const getInitialExpenses = () => {
  const savedExpenses = localStorage.getItem("expenses");
  return savedExpenses ? JSON.parse(savedExpenses) : [];
};

function App() {
const [expenses, setExpenses] = useState(getInitialExpenses)
const [selectedCategory,setSelectedCategory] = useState("")
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

const handleAddExpense = (newExpense) => {
setExpenses((prevExpenses) => [newExpense, ...prevExpenses])

}

const handleFilterChange = (category) => {
  setSelectedCategory(category)
}

const filteredExpenses = ([...selectedCategory
  ? expenses.filter((expense) => expense.category === selectedCategory)
  : expenses])
  expenses.sort((a, b) => new Date(b.date) - new Date(a.date));

  
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(exp => exp.id !== id));
  };
  
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return <div className={darkMode ? "dark-mode" : "light-mode"}>      
    <h1 className="firstHeader">Expense Tracker</h1>
    <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
    <ExpenseForm onAddExpense={handleAddExpense} />
    <ExpenseList expenses={filteredExpenses} onDelete={handleDeleteExpense}/>
    <Filter selectedCategory={selectedCategory} onFilterChange={handleFilterChange}/>
    <Summary expenses={filteredExpenses}/>
    <Chart expenses={filteredExpenses}/>
  </div>
}

export default App