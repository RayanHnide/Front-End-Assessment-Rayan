
import React from 'react';

const categories = [
  "Womans Fashion →",
  "Mens Fashion →",
  "Electronics",
  "Home&Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Babys & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const CategoryList: React.FC = () => {
  return (
    <div className="bg-white pt-10 px-4 sm:px-6 lg:px-0">
      <ul className="flex flex-wrap justify-center space-x-2 space-y-0 sm:space-y-2 sm:block">
        {categories.map((category, index) => (
          <li key={index} className="py-2 text-xs sm:text-sm sm:text-base">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;