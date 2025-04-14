export default function ExpenseItem({id,amount,description,category,date,onDelete}){
  return <div className="expenseItemDiv">
    <p><strong>Amount: </strong>GHC{amount}</p>

    <p><strong>Description: </strong>{description}</p>

    <p>Category: {category}</p>

    <p>Date: {date}</p>

    <button onClick={() => onDelete(id)}>Delete</button>
  </div>
}