export default function Summary({ expenses }) {
    const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
  
    return (
      <div className="totalExpenses">
        <h3 id="totalExpenses">Total Expenses: GHC{total.toFixed(2)}</h3>
      </div>
    );
  }