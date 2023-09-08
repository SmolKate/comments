// eslint-disable-next-line no-unused-vars
import axios, * as others from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8888",
    // withCredentials : true,
})

export const commentsAPI = {
    async getComments () {
        const response = await instance.get('/comments');
        return response.data;
    },
    async postComment (body) {
        const response = await instance.post('/comments', body);
        return response.data;
    },
    async deleteComment (id) {
        console.log(id)
        const response = await instance.delete(`/comments/${id}`);
        return response.data;
    },
}
