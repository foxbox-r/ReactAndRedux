import React from 'react';
import './App.css';
import PostsContainer from "./containers/PostsContianer"
import PostListContainer from "./containers/PostListContainer"

function App() {
  return (
    <div className="App">
     <h1>hi</h1>
     <PostsContainer />
     <PostListContainer />
    </div>
  );
}

export default App;
