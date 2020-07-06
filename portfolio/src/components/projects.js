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
      </div>
      <div className="proBox">
        <img
          className="proImg"
          src="/images/LGTSiteImg.png"
          alt="The 'Let's Get Tacos!' sun"
        />
      </div>
      <div className="proBox">
        <img
          className="proImg"
          src="/images/MTCSiteImg.png"
          alt="TacoCat Escape! log-in page"
        />
      </div>
    </div>
  )
}

export default Projects;