import React from 'react';
import './../App.css';

const CommentElement = ({ id, name, comment }) => {
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{comment}</div>
    </>
  );
};

export default CommentElement;
