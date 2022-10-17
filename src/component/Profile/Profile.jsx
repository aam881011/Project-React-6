import "./../framework.css";
import "./../master.css";
import "./Profile.css";
import img1 from "./../../assets/avatar.png";
import img2 from "./../../assets/activity-01.png";
import img3 from "./../../assets/activity-02.png";
import img4 from "./../../assets/activity-03.png";
import img5 from "./../../assets/activity-01.png";

const Profile = () => {
  return (
    <div>
      <h1 className="p-relative">Profile</h1>
      <div className="profile-page m-20">
        <div className="overview bg-white rad-10 d-flex align-center">
          <div className="avatar-box txt-c p-20">
            <img className="rad-half mb-10" src={img1} alt="" />
            <h3 className="m-0">Alazhry </h3>
            <p className="c-grey mt-10">Level 20</p>
            <div className="level rad-6 bg-eee p-relative">
              <span style={{ width: "70%" }}></span>
            </div>
            <div className="rating mt-10 mb-10">
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
              <i className="fa-solid fa-star c-orange fs-13"></i>
            </div>
            <p className="c-grey m-0 fs-13">550 Rating</p>
          </div>
          <div className="info-box w-full txt-c-mobile">
            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
              <div className="fs-14">
                <span className="c-grey">Full Name</span>
                <span>Alazhry </span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Gender:</span>
                <span>Male</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Country:</span>
                <span>Egypt</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>

            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey w-full fs-15 m-0">Personal Information</h4>
              <div className="fs-14">
                <span className="c-grey">Email:</span>
                <span>o@nn.sa</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Phone:</span>
                <span>019123456789</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Date Of Birth:</span>
                <span>25/10/1982</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>

            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey w-full fs-15 m-0">Job Information</h4>
              <div className="fs-14">
                <span className="c-grey">Title:</span>
                <span>Full Stack Developer</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Programming Language:</span>
                <span>Python</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Years Of Experience:</span>
                <span>15+</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" checked />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>

            <div className="box p-20 d-flex align-center">
              <h4 className="c-grey w-full fs-15 m-0">Billing Information</h4>
              <div className="fs-14">
                <span className="c-grey">Payment Method:</span>
                <span>Paypal</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Email:</span>
                <span>email@website.com</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Subscription:</span>
                <span>Monthly</span>
              </div>
              <div className="fs-14">
                <label>
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="other-data d-flex gap-20">
          <div className="skills-card p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">My Skills</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
            <ul className="m-0 txt-c-mobile">
              <li>
                <span>HTML</span>
                <span>Pugjs</span>
                <span>HAML</span>
              </li>
              <li>
                <span>CSS</span>
                <span>SASS</span>
                <span>Stylus</span>
              </li>
              <li>
                <span>JavaScript</span>
                <span>TypeScript</span>
              </li>
              <li>
                <span>Vuejs</span>
                <span>Reactjs</span>
              </li>
              <li>
                <span>Jest</span>
                <span>Jasmine</span>
              </li>
              <li>
                <span>PHP</span>
                <span>Laravel</span>
              </li>
              <li>
                <span>Python</span>
                <span>Django</span>
              </li>
            </ul>
          </div>
          <div className="activities p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">Latest Activities</h2>
            <p className="mt-0 mb-20 c-grey fs-15">
              Latest Activities Done By The User
            </p>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={img2} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey">Bought The Mastering Python Course</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">18:10</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={img3} alt="" />
              <div className="info">
                <span className="d-block mb-10">Academy</span>
                <span className="c-grey">Got The PHP Certificate</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">16:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={img4} alt="" />
              <div className="info">
                <span className="d-block mb-10">Badges</span>
                <span className="c-grey">Unlocked The 10 Skills Badge</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">18:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={img5} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey">Bought The Typescript Course</span>
              </div>
              <div className="date">
                <span className="d-block mb-10">12:05</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
