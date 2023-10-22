import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  //현재 활성화된 링크에 대한 스타일을 정의
  &.active {
    font-weight: 600;
    border-bottom: 2px solid @22b8cf;
    color: #22b8cf;
    &:hover {
      color: 3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
    /* 
    'to' props를 사용하여 각 카테고리에 대한 동적 url을 생성하고, 현재 선택된 카테고리에 대한
    active 클래스를 동적으로 추가하여 활성화된 링크를 강조
    'isActive는 NavLink컴포넌트가 현재 활성화 된 상태인지를 나타내는 부울 값.
    NavLink는 현재 url과 to prop에서 지정한 url이 일치할 때 isActive를 true로 설정한다.

    기본적으로 isActive는 현재 URL과 to prop에서 지정한 URL이 정확히 일치할 때만
     true로 설정됩니다. 그러므로 현재 페이지가 해당 링크에 해당하는 경우에만 active 
     클래스가 적용됩니다.
    */
  );
};

export default Categories;
