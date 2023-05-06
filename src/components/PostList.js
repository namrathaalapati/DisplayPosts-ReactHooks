import React from 'react'; 
const PostList = (props) =>{
    return(
        <tr>
        <td>{props.post.title}</td>
        <td>{props.post.body}</td>
        </tr>
    )
}
export default PostList;