import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Pagination from './Pagination';
const Posts = (props) =>{
          return (
            <div>
            {props.loading && <div>Loading.....</div>}
            {props.posts && <Pagination posts={props.posts}/>}
            {props.error && <ErrorBoundary errorMessage={props.error}/>}
        </div>);
}
export default Posts;
