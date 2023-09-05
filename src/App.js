import someImage from './some_image.jpg';
import React from 'react';
import './App.css';
import NewComment from './components/NewComment';
import CommentElement from './components/CommentElement'

const comments = [
  {
    id: '1',
    name: 'Kate',
    comment: 'wow',
  },
  {
    id: '2',
    name: 'Peter',
    comment: 'wow!!!',
  },
  {
    id: '3',
    name: 'Vova',
    comment: 'cool!!!',
  },
];
function App() {
  let allComments = comments.map((com) => (
    <CommentElement key={com.id} id={com.id} name={com.name} comment={com.comment} />
  ));

  const addPost = (name, comment) => {
    console.log('name: ', name, 'comment: ', comment);
  };

  return (
    <div className='container'>
      <div className='image_container'>
        <img alt='image' src={someImage} />
      </div>
      <NewComment onAddComment={addPost} />
      <div className='comments'>{allComments}</div>
      <div>Form</div>
    </div>
  );
}

export default App;
