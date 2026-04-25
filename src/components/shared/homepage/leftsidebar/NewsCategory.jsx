import Link from "next/link";
import React from "react";

const NewsCategory = ({ categories }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">All Category</h1>
      <ul className="flex flex-col gap-2 text-center font-semibold text-lg">
        {categories.map((category) => (
          <li key={category.category_id}
          className="bg-slate-100 p-2 rounded-md ">
            {category.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;
