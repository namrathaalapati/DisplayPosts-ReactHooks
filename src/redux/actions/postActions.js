import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from "../../utils/constants";
import axios from 'axios';

export const fetchPostsRequest = () =>({
    type:FETCH_POST_REQUEST
})

export const fetchPostsSuccess = (posts) =>({
    type:FETCH_POST_SUCCESS,
    payload: posts
})

export const fetchPostsError = (error) =>({
    type:FETCH_POST_ERROR,
    payload: error
})

export const fetchPosts =()=>{    
    return (dispatch)=>{
        dispatch(fetchPostsRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>
        dispatch(fetchPostsSuccess(response.data)))
        .catch(error=>{
            console.log(error);
            dispatch(fetchPostsError(error.message));
        })
    }
}