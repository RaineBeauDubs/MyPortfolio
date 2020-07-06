import React from 'react';
import './componentCSS/projects.css';


const Projects = () => {
  return (
    <div className="proCont">
      <div className="proBox">
        <img
          className="proImg"
          src="/images/RDRSiteImg.png"
          alt="Rainy Day Resale's official site, Consignor Info"
        />
        <div className="proInfo">
          <h3 className="proTitle">Rainy Day Resale</h3>
          <p className="proDesc"></p>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">

            </div>
            <div className="creFlexRight">

            </div>
          </div>
        </div>
      </div>
      <div className="proBox">
        <img
          className="proImg"
          src="/images/LGTSiteImg.png"
          alt="The 'Let's Get Tacos!' sun"
        />
        <div className="proInfo">
          <h3 className="proTitle">Let's Get Tacos!</h3>
          <p className="proDesc"></p>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">

            </div>
            <div className="creFlexRight">

            </div>
          </div>
        </div>
      </div>
      <div className="proBox">
        <img
          className="proImg"
          src="/images/MTCSiteImg.png"
          alt="TacoCat Escape! log-in page"
        />
        <div className="proInfo">
          <h3 className="proTitle">TacoCat Escape!</h3>
          <p className="proDesc"></p>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">

            </div>
            <div className="creFlexRight">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;