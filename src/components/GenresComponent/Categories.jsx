import React from 'react';
import styled from 'styled-components';

/* styeld 설정 */
const CategoriesBlock = styled.div`
  width: 100vw;
  padding-top: 100px;
`;
const UnorderedList = styled.ul`
  width: 90%;
  margin-left: 3.8%;
  display: flex;
  position: relative;
  justify-content: flex-end;
`;
const ListItem = styled.li`
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ categories }) => {
  return (
    <CategoriesBlock>
      <UnorderedList>
        {!categories && '카테고리 데이터가 존재하지 않습니다.'}
        {categories &&
          categories.map((category) => (
            <ListItem key={category.id}>{category.name}</ListItem>
          ))}
      </UnorderedList>
    </CategoriesBlock>
  );
};

export default Categories;
