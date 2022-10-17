import "./../framework.css";
import "./../master.css";
import "./Projects.css";
import img1 from "./../../assets/team-01.png";
import img2 from "./../../assets/team-02.png";
import img3 from "./../../assets/team-03.png";
import img4 from "./../../assets/team-04.png";
import img5 from "./../../assets/team-05.png";

const Projects = () => {
  return (
    <div>
    <h1 className="p-relative">Projects</h1>
    <div className="projects-page d-grid m-20 gap-20">
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/10/2021</span>
        <h4 className="m-0">Alazhry Dashboard</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Alazhry Dashboard Project Design And Programming And Hosting</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
          <a href="/"><img src={img4} alt="" /></a>
          <a href="/"><img src={img5} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
          <span className="fs-13 rad-6 bg-eee">Hosting</span>
          <span className="fs-13 rad-6 bg-eee">Marketing</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-red" style={{width: "50%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            2500
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Academy Portal</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Academy Portal Project Design And Programming</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "80%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            1800
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Chatting Application</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Chatting Application Project Design</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-blue" style={{width: "100%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            950
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Ahmed Dashboard</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Ahmed Dashboard Project Design And Programming And Hosting</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
          <a href="/"><img src={img4} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
          <span className="fs-13 rad-6 bg-eee">Hosting</span>
          <span className="fs-13 rad-6 bg-eee">Marketing</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "60%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            1700
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Ahmed Portal</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Ahmed Portal Project Design And Programming</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "70%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            850
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Mohamed Application</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Mohamed Application Project Design</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-red" style={{width: "40%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            950
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Mohamed Dashboard</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Mohamed Dashboard Project Design And Programming And Hosting</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
          <a href="/"><img src={img4} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
          <span className="fs-13 rad-6 bg-eee">Hosting</span>
          <span className="fs-13 rad-6 bg-eee">Marketing</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "65%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            1950
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Mohamed Portal</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Mohamed Portal Project Design And Programming</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Programming</span>
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "60%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            1650
          </div>
        </div>
      </div>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">15/6/2022</span>
        <h4 className="m-0">Ahmed Application</h4>
        <p className="c-grey mt-10 mb-10 fs-14">Ahmed Application Project Design</p>
        <div className="team">
          <a href="/"><img src={img1} alt="" /></a>
          <a href="/"><img src={img2} alt="" /></a>
          <a href="/"><img src={img3} alt="" /></a>
        </div>
        <div className="do d-flex">
          <span className="fs-13 rad-6 bg-eee">Design</span>
        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-green" style={{width: "90%"}}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>
            950
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;