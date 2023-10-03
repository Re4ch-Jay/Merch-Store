import React from 'react';

export default function SelectInput({ value, categories, className, ...props }) {
  return (
    <>
    <select
        {...props}
        className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
      >
        {!value && <option>Please Select Option</option>}
        {categories.map((category) => (
          <option key={category.id} value={category.id} selected={value === category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
