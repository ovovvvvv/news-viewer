import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
/*
styled-components를 사용할 때 & 기호와 :hover를 함께 사용하는 것은 CSS의
 가상 선택자(Virtual Selector) 중 하나인 :hover 상태에 스타일을 적용하겠다는 의미입니다.
여기서 &는 현재 정의된 스타일 블록의 선택자 자체를 나타냅니다. 따라서 &:hover는 
이 스타일 블록의 해당 요소가 마우스 커서가 호버(위에 올라가는) 상태일 때의 스타일을 정의합니다.
예를 들어, 위의 코드에서 Category 스타일드 컴포넌트는 일반적으로 텍스트의 색상을 상속하고,
 호버 상태일 때 텍스트의 색상을 #495057로 변경하도록 정의되어 있습니다. 
 이렇게 하면 사용자가 해당 요소 위에 마우스를 올리면 텍스트의 색상이 변경되는 효과를 얻을 수 있습니다.
*/

export default Categories;
