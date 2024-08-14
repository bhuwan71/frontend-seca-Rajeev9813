import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginUserApi } from '../../apis/Api';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate= useNavigate();

  const validation = () => {
    let isValid = true;

    if(email.trim() === '' || !email.includes('@')){
      setEmailError("Email is empty or invalid");
      isValid = false;
    }

    if(password.trim() === ''){
      setPasswordError("Password is empty");
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if(!validation()){
      return;
    }

    const data = {
      "email" : email,
      "password" : password
    };

    loginUserApi(data).then((res) => {
      if(res.data.success === false){
        toast.error(res.data.message);
      } else{
        toast.success(res.data.message);

        localStorage.setItem('token', res.data.token);

        const convertedData = JSON.stringify(res.data.userData);

        localStorage.setItem('user', convertedData);
          navigate("/dashboard")
      }
    });
  };

  return (
    
    <div className='flex justify-center items-center flex-col w-full h-screen bg-gray-100'>
      <div className=' bg-black w-1/2 flex justify-center items-center h-16 rounded-t-lg'><img src='assets/images/logo.png' alt='logo' height="150px" width="100px"/></div>
    <div className="w-1/2 h-3/5 flex shadow-lg rounded-lg">
  <div className="hidden md:flex w-1/2 bg-red-500 items-center justify-center rounded-bl-lg">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnuUjdyqXf9_CxonrF6E9LMMjZri--bjrSPVH0E4M57GyZ1b0T" alt="login-img" className="w-4/5 rounded-md h-auto" />
  </div>
  <div className="flex flex-col justify-center w-full md:w-1/2 max-w-md mx-auto p-8  shadow-md rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-6 ">Sign In</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block ">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block ">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-black  text-white rounded-lg hover:bg-gray-700"
      >
        Sign In
      </button>
      <div className="text-center mt-4">
        <Link to="#" className="hover:underline">
          Forgot your password?
        </Link>
      </div>
      <div className="text-center my-2">
        <p>New to My Learning? <Link to="/register" className='text-yellow-700 underline'>Sign up now</Link></p>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default Login;
