import React from 'react';
import './componentCSS/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';


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
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <p>HTML5</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <p>CSS3</p>
              </div>
            </div>
            <div className="creFlexRight">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faJs} />
                <p>JavaScript</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
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
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <p>HTML5</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <p>CSS3</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faJs} />
                <p>JavaScript</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
            </div>
            <div className="creFlexRight">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
                <p>Node.js</p>
              </div>

              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
                <p>Express</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faDatabase} />
                <p>SQL</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faDatabase} />
                <p>PostgreSQL</p>
              </div>
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
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <p>HTML5</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <p>CSS3</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faJs} />
                <p>JavaScript</p>
              </div>
            </div>
            <div className="creFlexRight">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faPython} />
                <p>Python</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faPython} />
                <p>Django</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;