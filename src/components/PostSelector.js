export const getFilteredPosts = (posts, text) =>{
    return posts.filter(
        (post)=> 
        post.title.toLowerCase().includes(text.toLowerCase()) || 
        post.body.toLowerCase().includes(text.toLowerCase()) )
}

export const getSortedPosts = (posts, sortOrder) =>{
        return  posts.slice().sort((a, b) => {
        if (sortOrder === 'Ascending') {
          return a.title.localeCompare(b.title);
        } else if (sortOrder === 'Descending'){
          return b.title.localeCompare(a.title);
        }
        else {
            return;
        }
      });
}

