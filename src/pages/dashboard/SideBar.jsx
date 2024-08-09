import { FaBell, FaBook, FaCalendarAlt, FaCog, FaComments, FaHome, FaLifeRing, FaMoon, FaQuestionCircle, FaSignOutAlt, FaSun,FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useActionData } from 'react-router-dom';
import { setComponentNumber } from '../../components/utils/userDashboardSlice';
import { TbReportAnalytics } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";


const Sidebar = () => {

  const dispatch = useDispatch();
    
    return (
      <div className="sidebar">
        <Link to={"/"}><div className="sidebar-logo">
          <img src="assets/images/logo.png" alt="Logo" />
        </div></Link>
        <ul className="sidebar-nav">
          <li onClick={()=>dispatch(setComponentNumber(3))}><FaCalendarAlt /> Learning</li>
          <li onClick={()=>dispatch(setComponentNumber(4))}><FaQuestionCircle /> Quiz</li>
          <li onClick={()=>dispatch(setComponentNumber(5))}><TbReportAnalytics /> Results</li>
          <li onClick={()=>dispatch(setComponentNumber(6))}><FaUserAlt /> Profile</li>
          <li onClick={()=>dispatch(setComponentNumber(7))}><SiGoogleclassroom /> Classes</li>
          {/* <li><FaComments /> Course Overview</li>
          <li><FaBook /> Schedule</li>
          <li><FaCog /> Resources</li> */}
          <Link to="/"><li ><FaHome /> Home</li></Link>
        </ul>
        <div className="sidebar-footer">
          <ul>
            <li><FaLifeRing /> Help and Support</li>
            <li onClick={() => window.location.href = "/login"}><FaSignOutAlt /> Log out</li>
          </ul>
        </div>
      </div>
    );
  };
export default Sidebar;