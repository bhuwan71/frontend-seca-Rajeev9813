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
    <>    
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Learning</title>
        <link rel="shortcut icon" href="https://www.netflix.com/in/favicon.ico" type="image/x-icon" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-image: url('https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=');
            background-size: cover;
            background-position: center;
            margin: 0;
          }

          .wrapper {
            width: 400px;
            background: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            color: #fff;
          }

          .wrapper h1 {
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: 600;
          }

          .input-box {
            position: relative;
            margin-bottom: 20px;
          }

          .input-box input {
            width: 100%;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            font-size: 16px;
          }

          .input-box label {
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.6);
            font-size: 16px;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .input-box input:focus ~ label,
          .input-box input:valid ~ label {
            top: -10px;
            left: 15px;
            font-size: 12px;
            color: #ffeb3b;
          }

          .btn {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: #e50914;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .btn:hover {
            background: #d40813;
          }

          .error {
            color: #ff0000;
            font-size: 12px;
            text-align: left;
            margin-top: 5px;
          }

          .remember-forgot {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 10px;
          }

          .remember-forgot a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
          }

          .remember-forgot a:hover {
            text-decoration: underline;
          }

          .register-link {
            margin-top: 20px;
            font-size: 14px;
          }

          .register-link a {
            color: #ffeb3b;
            text-decoration: none;
          }

          .register-link a:hover {
            text-decoration: underline;
          }
        `}</style>
      </head>
      
        <div className="wrapper">
          <form onSubmit={handleLogin}>
            <h1>Sign In to My Learning</h1>
            <div className="input-box">
              <input 
                type="text" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="input-box">
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <button type="submit" className="btn">Sign In</button>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="/">Need help?</a>
            </div>
            <div className="register-link">
              <p>New to My Learning? <Link to="/register">Sign up now</Link></p>
            </div>
          </form>
        </div>
    </>
  );
};

export default Login;
