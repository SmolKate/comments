import NewCommentForm from './NewCommentForm';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const NewComment = withFormik({
  mapPropsToValues({ name, comment }) {
    return {
      name: name || '',
      comment: comment || '',
      // captcha: captcha || ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(10, 'Максимальное количество символов 10.')
      .required('Обязательное поле'),
    comment: Yup.string()
      .max(100, 'Максимальное количество символов 100.')
      .required('Обязательное поле'),
  }),
  handleSubmit(values, { props: { onAddComment }, setSubmitting }) {
    // props.login(values.name, values.comment, setStatus)
    onAddComment(values.name, values.comment);
    values.name = '';
    values.comment = '';
    setSubmitting(false);
  },
})(NewCommentForm);

export default NewComment;
