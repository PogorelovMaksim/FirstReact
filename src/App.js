import React, { useState } from 'react';
import Classcounter from './ClassCounter';
import Counter from './components/Counter';
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])
  const [title, setTitle] = useState('')
  const addNewPost = () => {

  }

  return (
    <div className="App">
      <from>
        <MyInput
          value={title}
          type="text"
          placeholder='Название поста' />
        <MyInput type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </from>


      <PostList posts={posts} title="Посты про JS" />

    </div>
  );
}

export default App;
