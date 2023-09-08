import { commentsAPI } from "../api/api";

export const actions = {
    getCommentsAC : (comments) => ({type: 'comments/GET_COMMENTS', comments}),
}

let initialState = {
    commentsData: null
};

const commentsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'comments/GET_COMMENTS':
            return {
                ...state,
                commentsData: action.comments,
            };
        
        default:
            return state;
    }
}

export default commentsReducer;

export const getComments = () => async (dispatch) => {
    const data = await commentsAPI.getComments()
    dispatch(actions.getCommentsAC(data))    
}

export const addComment = (body) => async (dispatch) => {
    const data = await commentsAPI.postComment(body)
    if(data) {
        dispatch(getComments())
    }
}

export const deleteComment = (id) => async (dispatch) => {
    const data = await commentsAPI.deleteComment(id)
    if(data) {
        dispatch(getComments())
    }
}