import "./Sidbar.scss";
// import Navbar from "./../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./../master.css";
import "./../framework.css";

const Sidbar = () => {
  return (
    <>
      <aside className="">
        <div>
          <ul>
            <h2>Alazhry</h2>
            <li>
              <NavLink to="/">
                <i className="fa-solid fa-house-chimney"></i>
                <span> Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Settings">
                <i className="fa-solid fa-gear"></i>
                <span> Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Profile">
                <i className="fa-regular fa-user"></i>
                <span> Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects">
                <i className="fa-solid fa-diagram-project"></i>
                <span> Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Courses">
                <i className="fa-solid fa-graduation-cap"></i>
                <span> Courses</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Friends">
                <i className="fa-regular fa-circle-user fa-fw"></i>
                <span> Friends</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Files">
                <i className="fa-regular fa-file fa-fw"></i>
                <span> Files</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Plans">
                <i className="fa-regular fa-credit-card fa-fw"></i>
                <span> Plans</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidbar;

// <div className="sidebar bg-white p-20 p-relative">
//     <h3 className="p-relative txt-c mt-0">Elzero</h3>
//     <ul>
//       <li>
//         <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href="index.html">
//           <i className="fa-regular fa-chart-bar fa-fw"></i>
//           <span>Dashboard</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
//           <i className="fa-solid fa-gear fa-fw"></i>
//           <span>Settings</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
//           <i className="fa-regular fa-user fa-fw"></i>
//           <span>Profile</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="projects.html">
//           <i className="fa-solid fa-diagram-project fa-fw"></i>
//           <span>Projects</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="courses.html">
//           <i className="fa-solid fa-graduation-cap fa-fw"></i>
//           <span>Courses</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="friends.html">
//           <i className="fa-regular fa-circle-user fa-fw"></i>
//           <span>Friends</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="files.html">
//           <i className="fa-regular fa-file fa-fw"></i>
//           <span>Files</span>
//         </a>
//       </li>
//       <li>
//         <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="plans.html">
//           <i className="fa-regular fa-credit-card fa-fw"></i>
//           <span>Plans</span>
//         </a>
//       </li>
//     </ul>
//   </div>
