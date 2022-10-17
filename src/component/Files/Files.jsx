import "./../framework.css";
import "./../master.css";
import "./Files.css";
import img1 from "./../../assets/pdf.svg";
import img2 from "./../../assets/psd.svg";

const Files = () => {
  return (
    <div>
    <h1 className="p-relative">Files</h1>
    <div className="files-page d-flex m-20 gap-20">
      <div className="files-stats p-20 bg-white rad-10">
        <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
        <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
          <i className="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon"></i>
          <div className="info">
            <span>PDF Files</span>
            <span className="c-grey d-block mt-5">130</span>
          </div>
          <div className="size c-grey">6.5GB</div>
        </div>
        <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
          <i className="fa-regular fa-images fa-lg green center-flex c-green icon"></i>
          <div className="info">
            <span>Images</span>
            <span className="c-grey d-block mt-5">115 Files</span>
          </div>
          <div className="size c-grey">3.5GB</div>
        </div>
        <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
          <i className="fa-regular fa-file-word fa-lg red center-flex c-red icon"></i>
          <div className="info">
            <span>Word Files</span>
            <span className="c-grey d-block mt-5">110 Files</span>
          </div>
          <div className="size c-grey">3.2GB</div>
        </div>
        <div className="d-flex align-center border-eee p-10 rad-6 fs-13">
          <i className="fa-solid fa-file-csv fa-lg orange center-flex c-orange icon"></i>
          <div className="info">
            <span>CSV Files</span>
            <span className="c-grey d-block mt-5">99 Files</span>
          </div>
          <div className="size c-grey">2.9GB</div>
        </div>
        <a className="upload bg-blue c-white fs-13 rad-6 d-block w-fit" href="/">
          <i className="fa-solid fa-angles-up mr-10"></i>
          Upload
        </a>
      </div>
      <div className="files-content d-grid gap-20">
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.pdf</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>20/06/2020</span>
            <span>5.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.avi</div>
          <p className="c-grey fs-13">Admin</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>12.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.eps</div>
          <p className="c-grey fs-13">Uploader</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.7MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.psd</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>15.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.dll</div>
          <p className="c-grey fs-13">Coder</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.2MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.png</div>
          <p className="c-grey fs-13">Designer</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>1.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.dll</div>
          <p className="c-grey fs-13">Coder</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.2MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.png</div>
          <p className="c-grey fs-13">Designer</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>1.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.psd</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>15.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.pdf</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>5.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.avi</div>
          <p className="c-grey fs-13">Admin</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>12.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.eps</div>
          <p className="c-grey fs-13">Uploader</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.7MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.pdf</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>5.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.avi</div>
          <p className="c-grey fs-13">Admin</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>12.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.eps</div>
          <p className="c-grey fs-13">Uploader</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.7MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src="imgs/psd.svg" alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.psd</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>15.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.dll</div>
          <p className="c-grey fs-13">Coder</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.2MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.png</div>
          <p className="c-grey fs-13">Designer</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>1.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.dll</div>
          <p className="c-grey fs-13">Coder</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.2MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.png</div>
          <p className="c-grey fs-13">Designer</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>1.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.psd</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>15.1MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.pdf</div>
          <p className="c-grey fs-13">Alazhry</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>5.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img2} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.avi</div>
          <p className="c-grey fs-13">Admin</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>12.5MB</span>
          </div>
        </div>
        <div className="file bg-white p-10 rad-10">
          <i className="fa-solid fa-download c-grey p-absolute"></i>
          <div className="icon txt-c">
            <img className="mt-15 mb-15" src={img1} alt="" />
          </div>
          <div className="txt-c mb-10 fs-14">my-file.eps</div>
          <p className="c-grey fs-13">Uploader</p>
          <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
            <span>16/5/2021</span>
            <span>2.7MB</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Files;