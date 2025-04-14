export default function Filter({ selectedCategory, onFilterChange }) {
    return (
      <div className="filterContainer">
        <label htmlFor="categoryFilter" className="filterLabel">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="Transport">Transport</option>
          <option value="Health">Health</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Savings">Savings</option>
        </select>
      </div>
    );
  }
  