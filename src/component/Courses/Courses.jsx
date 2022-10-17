import "./../framework.css";
import "./../master.css";
import "./Courses.css";
import img1 from "./../../assets/team-01.png";
import img2 from "./../../assets/course-01.jpg";
import img3 from "./../../assets/team-03.png";
import img4 from "./../../assets/course-02.jpg";
import img5 from "./../../assets/course-03.jpg";

const Courses = () => {
  return (
    <div>
    <h1 className="p-relative">Courses</h1>
    <div className="courses-page d-grid m-20 gap-20">
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img2} alt="" />
        <img className="instructor" src={img1} alt="" />
        <div className="p-20">
          <h4 className="m-0">Mastering Web Design</h4>
          <p className="description c-grey mt-15 fs-14">
            Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey">
            <i className="fa-regular fa-user"></i>
            950
          </span>
          <span className="c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            165
          </span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img4} alt="" />
        <img className="instructor" src={img3} alt="" />
        <div className="p-20">
          <h4 className="m-0">Data Structure And Algorithms</h4>
          <p className="description c-grey mt-15 fs-14">
            Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 1150</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 210</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img5} alt="" />
        <img className="instructor" src={img1} alt="" />
        <div className="p-20">
          <h4 className="m-0">Responsive Web Design</h4>
          <p className="description c-grey mt-15 fs-14">
            Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 650</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 90</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img4}  alt="" />
        <img className="instructor" src={img3} alt="" />
        <div className="p-20">
          <h4 className="m-0">Mastering Python</h4>
          <p className="description c-grey mt-15 fs-14">
            Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 950</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 250</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img2}  alt="" />
        <img className="instructor" src={img1}  alt="" />
        <div className="p-20">
          <h4 className="m-0">PHP Examples</h4>
          <p className="description c-grey mt-15 fs-14">
            PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 850</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 150</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img4}  alt="" />
        <img className="instructor" src={img3}  alt="" />
        <div className="p-20">
          <h4 className="m-0">Data Structure And Algorithms</h4>
          <p className="description c-grey mt-15 fs-14">
            Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 1150</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 210</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img4}  alt="" />
        <img className="instructor" src={img1}  alt="" />
        <div className="p-20">
          <h4 className="m-0">Responsive Web Design</h4>
          <p className="description c-grey mt-15 fs-14">
            Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 650</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 90</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img5}  alt="" />
        <img className="instructor" src={img3}  alt="" />
        <div className="p-20">
          <h4 className="m-0">Mastering Web Design</h4>
          <p className="description c-grey mt-15 fs-14">
            Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 850</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 145</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img4}  alt="" />
        <img className="instructor" src={img1}  alt="" />
        <div className="p-20">
          <h4 className="m-0">PHP Examples</h4>
          <p className="description c-grey mt-15 fs-14">
            PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 850</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 150</span>
        </div>
      </div>
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={img2}  alt="" />
        <img className="instructor" src={img3}  alt="" />
        <div className="p-20">
          <h4 className="m-0">Mastering Python</h4>
          <p className="description c-grey mt-15 fs-14">
            Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life
          </p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"> <i className="fa-regular fa-user"></i> 950</span>
          <span className="c-grey"><i className="fa-solid fa-dollar-sign"></i> 250</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Courses;