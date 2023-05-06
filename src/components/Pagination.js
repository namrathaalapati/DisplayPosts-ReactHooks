import React, { useState } from 'react';
import PostList from './PostList';
import classes from './Pagination.module.css';

const postsPerPage = 10;

const Pagination=(props)=> {
  const [currentPage, setCurrentPage] = useState(1);
  const {posts} = props;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div>
        <table className={classes.users}>
            <thead>
                <tr>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
        {currentPosts.length > 0 ? currentPosts.map(post => (
        <PostList key={post.id} post={post}/>
          )):<tr><td>There are no records found.</td></tr>}
          </tbody>
          </table>
      <div className={classes.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
          <button className={pageNumber === currentPage ? classes.active : ""} key={pageNumber} onClick={() => handleClick(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Pagination;