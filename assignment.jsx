import React, { useState } from "react";

export default class assignment extends Component {
        const categories = [
        { id: 1, title: "Phones", products: ["Tecno", "RealMe", "Samsung"] },
        { id: 2, title: "Laptop", products: ["Lenovo", "hP", "Compaque", "Del"] },
        { id: 3, title: "Fruites", products: ["Mango", "Orange"] },
        { id: 4, title: "Utensils", products: ["Plate", "Cup", "Spoon"] },
        { id: 5, title: "Furniture", products: ["Chair", "Bed", "Stool"] }
        ];

        const Products = () => {     
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const allProducts = categories.flatMap((category) => category.products);
  const productsToDisplay = selectedCategory
    ? selectedCategory.products
    : allProducts;

  return (
    <div>
      <div>
        {categories.map((category) => (
          <div key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.title}
          </div>
        ))}
      </div>
      <div>
        {productsToDisplay.map((product) => (
          <div key={product}>{product}</div>
        ))}
      </div>
    </div>
  );
};

} 

