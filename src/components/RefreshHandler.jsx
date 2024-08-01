//RefreshHandler check that if user is there in webpage or not
//it will check if user is present and user try to navigate through url than it 
//will redirect it to home page

import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = ({ setIsAuthenticated }) => {
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      const user = localStorage.getItem("user");
      // console.log(user);
      if (user) {
        setIsAuthenticated(true);
        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/register') {
          navigate('/', {replace: false});
        }
        // if(location.pathname == '/dashboard')
      } 
    }, [location.pathname, setIsAuthenticated, navigate]);
  
    return null; // Make sure this component returns null
  };
  
  export default RefreshHandler;