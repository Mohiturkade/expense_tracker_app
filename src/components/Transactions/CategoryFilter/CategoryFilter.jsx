import "./CategoryFilter.css";

function CategoryFilter() {
  const categories = [
    "All",
    "Food",
    "Transport",
    "Bills",
    "Shopping",
    "Health",
  ];

  return (
    <div className="category-filter">

      {
        categories.map((category, index) => (
          <button
            key={index}
            className={
              index === 0
                ? "filter-chip active"
                : "filter-chip"
            }
          >
            {category}
          </button>
        ))
      }

    </div>
  );
}

export default CategoryFilter;