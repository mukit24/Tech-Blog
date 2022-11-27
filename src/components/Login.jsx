import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

const Login = () => {
    const [inputs, setinputs] = useState({});
    const navigate = useNavigate();

    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setinputs(values => ({...values,[name]:value}));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs);
        axiosInstance.post('token/',inputs).then((res) => {
            localStorage.setItem('access_token', res.data.access);
			localStorage.setItem('refresh_token', res.data.refresh);
			axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
            navigate('/');
        })
    }
  return (
    <>
    <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" required id="username" name='username' value={inputs.username} onChange={handleChange}/>   
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" name='password' required  value={inputs.password} onChange={handleChange}/>   
                </div>
                <button type="submit">Login</button>
            </form>
    </>
  )
}

export default Login