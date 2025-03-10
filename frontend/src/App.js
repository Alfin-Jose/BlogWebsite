import './App.css';
import Home from './pages/Home'
import Login from'./pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MyBlogs from './pages/MyBlogs'
import CreatePost from './pages/CreatePost'
import PostDetails from './pages/PostDetails'
import EditPost from './pages/EditPost'
import {Route,Routes} from 'react-router-dom'
import UserContextProvider from './context/UserContext';
function App() {
  return (
    <UserContextProvider>

    
    
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/Register' element={<Register/>} />
      <Route exact path='/write' element={<CreatePost/>} />
      <Route exact path='/Post/post/:id' element={<PostDetails/>} />
      <Route exact path='/edit/:id' element={<EditPost/>} />
      <Route exact path='/myblogs/:id' element={<MyBlogs/>} />
      <Route exact path='/profile/:id' element={<Profile/>} />
    </Routes>
    </UserContextProvider>
    
  );
}

export default App;
