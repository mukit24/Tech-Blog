import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import axiosInstance from './axios';
import Registration from './components/Registration';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  const [posts, setposts] = useState([])

  useEffect(()=>{
      axiosInstance.get().then((response)=>{
        setposts(response.data);
      })
  },[setposts])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='posts' element={<Posts posts={posts}/>} />
          <Route path='registration' element={<Registration/>} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
