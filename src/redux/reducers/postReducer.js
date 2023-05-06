import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from "../../utils/constants";
const initialState = {
    loading:false,
    posts:[],
    error:'',
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                posts: action.payload
            }    
        case FETCH_POST_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            } 
            default:
                return state;   
    }
}

export default reducer;