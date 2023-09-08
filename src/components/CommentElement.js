import React from 'react';
import './../App.css';
import { useDispatch } from 'react-redux';
import { deleteComment } from './../redux/comments_reducer'

const CommentElement = ({ id, name, comment, date }) => {

  const dispatch = useDispatch()

  date = new Date(date)
  const creationDate = date.toLocaleString('ru-RU')

  const deleteHandler = () => {
    dispatch(deleteComment(id))
  }

  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{comment}</div>
      <div>{creationDate}</div>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default CommentElement;
