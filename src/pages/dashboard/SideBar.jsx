import { FaBell, FaBook, FaCalendarAlt, FaCog, FaComments, FaHome, FaLifeRing, FaMoon, FaQuestionCircle, FaSignOutAlt, FaSun,FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useActionData } from 'react-router-dom';
import { setComponentNumber } from '../../components/utils/userDashboardSlice';
import { TbReportAnalytics } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";


const Sidebar = ({componentNumber}) => {

  const dispatch = useDispatch();
    
    return (
      <div className="sidebar">
        <Link to={"/"}><div className="sidebar-logo">
          <img src="assets/images/logo.png" alt="Logo" />
        </div></Link>
        <ul className="sidebar-nav">
          <li onClick={()=>dispatch(setComponentNumber(3))}  className={ componentNumber ===3? 'active': ''}><FaHome /> Home</li>
          <li onClick={()=>dispatch(setComponentNumber(4))} className={ componentNumber ===4? 'active': ''}><FaCalendarAlt /> Learning</li>
          <li onClick={()=>dispatch(setComponentNumber(5))} className={ componentNumber ===5? 'active': ''}><FaQuestionCircle /> Quiz</li>
          <li onClick={()=>dispatch(setComponentNumber(6))} className={ componentNumber ===6? 'active': ''}><TbReportAnalytics /> Results</li>
          <li onClick={()=>dispatch(setComponentNumber(7))} className={ componentNumber ===7? 'active': ''}><FaUserAlt /> Profile</li>
          <li onClick={()=>dispatch(setComponentNumber(2))} className={ componentNumber ===8? 'active': ''}><SiGoogleclassroom /> Classes</li>
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