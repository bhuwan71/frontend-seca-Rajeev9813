import { FaBell, FaBook, FaCalendarAlt, FaCog, FaComments, FaHome, FaLifeRing, FaMoon, FaQuestionCircle, FaSignOutAlt, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setComponentNumber } from '../../components/utils/userDashboardSlice';

const Header = ({ user, toggleDarkMode, isDarkMode }) => {

  const dispatch = useDispatch();
  const navigate= useNavigate();

    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'Good Evening';
      if (hour < 18) return 'Good Afternoon';
      return 'Good Evening';
    };


  
    const handleLogout = () => {
      localStorage.clear();
      toast.success("User Loggedout");
      // window.location.href = "/login";
      setTimeout(()=>{
        navigate("/login")
      },500)
    };

    return (
      <div className="header">
        <ul className='flex gap-3 text-2xl pl-2 cursor-pointer'>
            <li className='cursor-pointer hover:underline hover:transition-all ' onClick={()=>dispatch(setComponentNumber(0))}>Notices</li>
            <li className='cursor-pointer hover:underline hover:transition-all ' onClick={()=>dispatch(setComponentNumber(1))}>Requests</li>
            <li className='cursor-pointer hover:underline hover:transition-all ' onClick={()=>dispatch(setComponentNumber(2))}>Routine</li>
        </ul>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="user-section">
          <FaBell className="icon" />
          {isDarkMode ? (
            <FaSun className="icon" onClick={toggleDarkMode} />
          ) : (
            <FaMoon className="icon" onClick={toggleDarkMode} />
          )}
          <div className="user-profile">
            <p>{getGreeting()}, {user.firstName} {user.lastName}</p>
            <img src={user.profilePic || 'assets/images/profile.png'} alt="User" />
            <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
  };

  export default Header;