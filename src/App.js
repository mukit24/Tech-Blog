import axios from 'axios';
import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';

function App() {
  const [posts, setposts] = useState([])
  const API_URL = "http://127.0.0.1:8000/api/";


  useEffect(()=>{
      axios.get(API_URL).then((response)=>{
        setposts(response.data);
      })
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='posts' element={<Posts posts={posts}/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
