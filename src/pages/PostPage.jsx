import React from 'react';
import qs from 'qs';

/* import container */
import PostContainer from '../containers/PostContainer';

const PostPage = ({ match, location }) => {
  const { id } = match.params;
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 생략
  });
  const type = query.type;

  return <PostContainer id={id} type={type} />;
};

export default PostPage;
