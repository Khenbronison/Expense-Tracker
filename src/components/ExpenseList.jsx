import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({expenses,onDelete}){
    return <div className="expenseListContainer">
        {
        (expenses.length === 0) ? <p>No expenses yet!</p>  :
            expenses.map((expense)=><ExpenseItem key={expense.id} amount={expense.amount} description={expense.description} category={expense.category} date={expense.date} onDelete={() => {
                if (confirm("Are you sure you want to delete this expense?")) {
                  onDelete(expense.id);
                }
              }}/>)
        }
    </div>
}