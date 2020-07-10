import React from 'react';
import { Link } from 'react-router-dom';

const PostLink = ({ children, id, type }) => {
  return <Link to={`/post/${id}?type=${type}`}>{children}</Link>;
};

export default PostLink;
