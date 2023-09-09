import someImage from './some_image.jpg';
import React, { useEffect } from 'react';
import './App.css';
import NewComment from './components/NewComment';
import CommentElement from './components/CommentElement';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, addComment } from './redux/comments_reducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';


// const comments = [
//   {
//     id: '1',
//     name: 'Kate',
//     comment: 'wow',
//   },
//   {
//     id: '2',
//     name: 'Peter',
//     comment: 'wow!!!',
//   },
//   {
//     id: '3',
//     name: 'Vova',
//     comment: 'cool!!!',
//   },
// ];
function App() {

  // const [test, setComments] = useState()

  const dispatch = useDispatch()
  const commentsData = useSelector((state) => state.comments.commentsData)
  const errorData = useSelector((state) => state.comments.error)

  // const store = useStore()
  // const getAllComments = () => {
  //   dispatch(getComments())
  // }

  useEffect(() => {
    dispatch(getComments())
  }, [dispatch])

  // Обработчик ошибки. При возникновении ошибки всплывает информационное окно
  const customId = "custom-id-yes";
  const notify = () => {
    let info = 'Что-то пошло не так. Попробуйте позже.'
    if (errorData.details && errorData.details.length !== 0) {
      info = errorData.details
    }
    const text = `${errorData.errCode}: ${info}`
    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: customId
    });
  }
  if (errorData.errCode) {
    notify()
  }

  const reversedData = commentsData?.sort((a, b) => {
    const dateA = a.creationDate; 
    const dateB = b.creationDate;
    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }})

  let allComments = reversedData?.map((com) => (
    <CommentElement 
      key={com.id} 
      id={com.id} 
      name={com.userName} 
      comment={com.comment}
      date={com.creationDate} />
  ));

  const addPost = (name, comment) => {
    // console.log('name: ', name, 'comment: ', comment);
    const data = new Date
    const body = {
      userName: name,
      comment: comment,
      creationDate: data
    }
    dispatch(addComment(body))
  };

  return (
    <div className='container'>
      <ToastContainer autoClose={3000} theme='colored'/>
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
