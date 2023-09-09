import { commentsAPI } from "../api/api";

export const actions = {
    getCommentsAC : (comments) => ({type: 'comments/GET_COMMENTS', comments}),
    setError : (errCode, details) => ({type: 'comments/SET_ERROR', data: {errCode, details}})
}

const errorHandler = (err) => dispatch => {
    let details = ''
    if (err.response.data?.error) {
        details = err.response.data?.error
    }
    dispatch(actions.setError(err.response.status, details))
 
}

let initialState = {
    commentsData: null,
    error: {
        errCode: null,
        details: null
    }
};

const commentsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'comments/GET_COMMENTS':
            return {
                ...state,
                commentsData: action.comments,
            };
        case 'comments/SET_ERROR':
            return {
                ...state,
                error: action.data
            };
        default:
            return state;
    }
}

export default commentsReducer;

export const getComments = () => async (dispatch) => {
    try {
        const data = await commentsAPI.getComments()
        dispatch(actions.getCommentsAC(data)) 
    } catch (err) {
        dispatch(errorHandler(err))
    } 
}

export const addComment = (body) => async (dispatch) => {
    try {
        await commentsAPI.postComment(body)
        dispatch(getComments())
    } catch (err) {
        dispatch(errorHandler(err))
    }
}

export const deleteComment = (id) => async (dispatch) => {
    try {
        await commentsAPI.deleteComment(id)
        dispatch(getComments())
    } catch (err) {
        dispatch(errorHandler(err))
    }   
}