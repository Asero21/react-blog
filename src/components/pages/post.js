import '../css/post.css'
import { useState } from 'react';

function Post({posts, deletePosts }) {

  const [filter, setFilter]  = useState('')
  
  const renderPost = () => { 
    if (filter === '' ) {
      return posts.map( (posts) =>{ 
        return( 
            <div>
                <div key={posts.id}>
                    <div className='post-container'>
                        <span>{'\u25BA'}</span>
                        <span className="post-name">{posts.postName}</span>
                        <div className="delete-button-holder">
                            <button
                            onClick={() => deletePosts(posts.id)}
                            className="delete-button"
                            >X</button>
                        </div>
                        <br></br>
                        <span className="post-name1">{posts.content}</span> 
                        <div>
                        <button
                            onClick={() => deletePosts(posts.id)}
                            className="view-button"
                            >View</button>
                        </div>
                    </div>
                </div>
            </div>
        )})
    }
    const filteredPost = posts.filter(post=>{
      return filter === post.postName.toString().toLowerCase()
    })
    console.log(filteredPost)
    return (
      filteredPost.map( (posts) =>{ 
          return( 
              <div>
                  <div key={posts.id}>
                      <div className='post-container'>
                          <span>{'\u25BA'}</span>
                          <span className="post-name">{posts.postName}</span>
                          <div className="delete-button-holder">
                              <button
                              onClick={() => deletePosts(posts.id)}
                              className="delete-button"
                              >X</button>
                          </div>
                          <br></br>
                          <span className="post-name1">{posts.content}</span> 
                          <div>
                            <button
                              onClick={() => deletePosts(posts.id)}
                              className="view-button"
                              >View</button>
                          </div>
                      </div>
                  </div>
              </div>
          )})
    )
  }
 
    return (
      <div>
        <input 
          placeholder='Search' 
          className='search-bar'
          onChange={(e) => setFilter(e.target.value)}
        />
        <div>
        <div className='No-task'>
          {posts && posts.length ? '' : 'No Post'}
        </div>
            {renderPost()}
        {/* { posts && posts
          .map( (posts) =>{ 
              return( 
                  <div>
                      <div key={posts.id}>
                          <div className='post-container'>
                              <span>{'\u25BA'}</span>
                              <span className="post-name">{posts.postName}</span>
                              <div className="delete-button-holder">
                                  <button
                                  onClick={() => deletePosts(posts.id)}
                                  className="delete-button"
                                  >X</button>
                              </div>
                              <br></br>
                              <span className="post-name1">{posts.content}</span> 

                          </div>
                      </div>
                  </div>
              )})} */}
        </div>
      </div>
    );
  }

export default Post;

// {posts.checked ? 'post-done': ''}