import React from 'react';
import './componentCSS/contact.css';

const Contact = () => {
  return (
    <div>
      <h3>Get In Touch!</h3>
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
          />
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Message..."
          />
          <div>
            <button>Send</button>
            <button>Clear</button>
          </div>
        </form>
        <div>
            <div>
              <h4>Email</h4>
              <p>RaineBeauDubs@gmail.com</p>
            </div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/RaineBeauDubs">RaineBeauDubs</a>
            </div>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/raine-wallace/">/raine-wallace</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;