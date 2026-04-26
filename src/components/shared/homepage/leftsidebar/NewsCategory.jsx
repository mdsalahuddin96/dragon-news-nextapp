import Link from "next/link";
import React from "react";

const NewsCategory = ({ categories, activeId }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">All Category</h1>
      <ul className="flex flex-col gap-2 text-center font-semibold text-md mt-4">
        {categories.map((category) => (
          <li key={category.category_id} className={`${activeId==category.category_id&&'text-white bg-purple-400'}`}>
            <Link
              className={`p-2 rounded-md block`}
              href={`/category/${category.category_id}`}
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
