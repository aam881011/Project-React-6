import "./Navbar.scss";
import icon3 from "./../../assets/Active.png";

const Navbar = () => {


  return (
    <div className="topbar">
      <div className="toggle">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <div className="user">
        <img src={icon3} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
// <nav>
//       <section classNameName="navContainer">
//         <div>
//           <img src={icon} alt="" />
//           <input type="search" name="" id="" placeholder="Type A Keyword" />
//         </div>
//         <div>
//           <img src={icon2} alt="" />
//           <img src={icon3} alt="" />
//         </div>
//       </section>
//     </nav>
