import React from 'react';
import styled, { css } from 'styled-components';

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
  font-weight: 600;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  ${(props) =>
    props.genreId === props.categoryId &&
    css`
      color: red;
      border-bottom: 3px solid red;
    `}
`;

const Categories = ({ categories, onSelect, genreId }) => {
  return (
    <CategoriesBlock>
      <UnorderedList>
        {!categories && '카테고리 데이터가 존재하지 않습니다.'}
        {categories &&
          categories.map((category) => (
            <ListItem
              key={category.id}
              onClick={() => onSelect(category.id)}
              categoryId={category.id}
              genreId={genreId}
            >
              {category.name}
            </ListItem>
          ))}
      </UnorderedList>
    </CategoriesBlock>
  );
};

export default Categories;
