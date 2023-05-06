import React,{useState} from 'react';
import classes from './FilterPosts.module.css';

const FilterPosts = (props) =>{
    const[inputText, setInputText] = useState('');
    const [sortOrder, setSortOrder] = useState('None');
   
    const inputChangeHandler = (event) =>{
        setInputText(event.target.value);
        props.displayFilteredPosts(event.target.value);
        setSortOrder('None');
          }
    const sortOrderHandler = (event) =>{
        setSortOrder(event.target.value);
        props.sortOrderByTitle(event.target.value);
          }
    return(
        <div className={classes.filterPosts}>
        <div className={classes.search}>
        <label htmlFor='searchQuery'>Search: </label>
        <input id='searchQuery' type='text' value={inputText} onChange={inputChangeHandler}/>
        </div>
         <div className={classes.sortByTitle}>
         <label htmlFor='sortOrder'>Sort By Title:</label>
         <select id='sortOrder' value={sortOrder} onChange={sortOrderHandler}>
         <option val='default'>None</option>
             <option val='ascending'>Ascending</option>
             <option val='descending'>Descending</option>
         </select>
     </div>
     </div>
    )
}
export default FilterPosts;
