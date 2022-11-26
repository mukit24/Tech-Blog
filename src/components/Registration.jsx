import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';


const Registration = () => {
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
        axiosInstance.post('user/register/',inputs).then((response) => {
            navigate('/login');
            return console.log(response);
        })
        // onAdd(inputs);
        // setinputs({});
        // navigate('/');
    }
  return (
    <>
    <h4>Registration</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="username">User Name</label>
                    <input type="text" required id="username" name='username' value={inputs.username} onChange={handleChange}/>   
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" required  id="email" name='email' value={inputs.email} onChange={handleChange}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" name='password' required  value={inputs.password} onChange={handleChange}/>   
                </div>
                <button type="submit">Submit</button>
            </form>
    </>
  )
}

export default Registration