import React from 'react';
import { Link } from 'react-router-dom';

const PostLink = ({ children, id }) => {
  return <Link to={`/post/${id}`}>{children}</Link>;
};

export default PostLink;
