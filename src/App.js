import Layout from './components/layouts/layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home';
import PostPage from './components/pages/post';
import CreatePage from './components/pages/create';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState(

    [{
        id: 1,
        postName: 'Hello!',
        content: 'This is my first blog.'
    }])

    const [newPost, setNewPost] = useState('');
    const [newPostR, setNewPostR] = useState('');

    const addPost = () => {
      if(newPost) {
          let num = posts.length + 1;
          let newEntry = { id: num, postName: newPost, content: newPostR}
          setPosts([...posts, newEntry])
          setNewPost('')
          setNewPostR('')
      }
  }

  const deletePosts = (id) => {
      let newPosts = posts.filter(posts => posts.id !== id)
      setPosts(newPosts)
  }

  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/post" element={
        <PostPage 
        posts={posts}
        deletePosts={deletePosts}
        />}/>
        <Route 
        path="/create" 
        element={
        <CreatePage 
        addPost={addPost} 
        newPost={newPost}
        setNewPost={setNewPost}
        newPostR={newPostR}
        setNewPostR={setNewPostR}
        />}/>
      </Routes>
    </Layout>
  );
}

export default App;
