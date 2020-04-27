import React,{Component} from 'react';
import './App.css';
import Post from './components/Post/Post'
import CreatePost from './components/CreatePost/CreatePost'

class App extends Component{
  render() {
    return (
      <div className='App'>
        <div className='createPoststyling shadow'><CreatePost/></div>
        <div className='Poststyling shadow'><Post/></div>
      </div>
    )
  }
}

export default App;
