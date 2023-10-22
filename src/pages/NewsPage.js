import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'all';
  /*  
  params.category가 존재하고 truthy한 값(비어있지 않은 문자열 또는 다른 truthy 값)
  이라면 category 변수에 params.category의 값이 할당된다.
  그러나 params.category가 falsy한 값(null, undefined, 빈 문자열)인 경우,
  category변수에 'all'이라는 문자열이 할당.
  */
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
