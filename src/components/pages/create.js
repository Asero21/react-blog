import '../css/create.css'

function Create( {addPost, newPost, setNewPost, newPostR, setNewPostR} ) {

    return (
      <div>
        <div>
          <label className="post-name">Name Of Post:</label>
          <input 
              className='post-name-child'
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <div>
          <div><label className="post-content">Content:</label></div>
          <textarea
            className='post-content-child'
            value={newPostR}
            onChange={(e) => setNewPostR(e.target.value)}      
          />
          <div className='add-post-container'>
            <button onClick={addPost} disabled={newPost === '' || newPostR === ''} className="add-post">Save</button>
          </div>
        </div>
      </div>
    );
  }

export default Create;