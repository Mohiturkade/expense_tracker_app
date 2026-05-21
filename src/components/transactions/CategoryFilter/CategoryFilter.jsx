import "./CategoryFilter.css";

function CategoryFilter({
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    "All",
    "Food",
    "Transport",
    "Bills",
    "Shopping",
    "Health",
    "Rent",
    "Leisure",
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "filter-chip active"
              : "filter-chip"
          }
          onClick={() =>
            setActiveCategory(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;