import React from 'react';

/* import categories data */

const Categories = ({ categories }) => {
  return (
    <div>
      <ul>
        {!categories && '카테고리 데이터가 존재하지 않습니다.'}
        {categories &&
          categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
