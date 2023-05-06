import { useDispatch, useSelector } from 'react-redux';
import Posts from './components/Posts';
import { useEffect } from 'react';
import {fetchPosts} from './redux/actions/postActions';
import {useState} from 'react';
import { getFilteredPosts, getSortedPosts } from './components/PostSelector';
import classes from './App.module.css';
import FilterPosts from './components/FilterPosts';
function App() {
  const [filterPosts, setFilterPost] = useState();
    const dispatch = useDispatch();
  const apiPosts = useSelector(state=>state.posts.posts);
  const error = useSelector(state=>state.posts.error);
  const loading = useSelector(state=>state.posts.loading);

  useEffect(()=>{
        dispatch(fetchPosts())
  },[dispatch])

  const displayFilteredPosts = (inputText) =>{
       const filter = getFilteredPosts(apiPosts, inputText);
      setFilterPost(filter);
  }

  const sortOrderByTitle = (sortOrder) =>{
    const posts = filterPosts ?? apiPosts;
      const sorted = getSortedPosts(posts, sortOrder);
      setFilterPost(sorted);
  }
  console.log('filterPosts',filterPosts);
  
  return (
    <div className={classes.app}>
       <FilterPosts displayFilteredPosts={displayFilteredPosts} sortOrderByTitle={sortOrderByTitle}/>
       <Posts posts={filterPosts ?? apiPosts} error={error} loading={loading}/>
    </div>
  );
}

export default App;
