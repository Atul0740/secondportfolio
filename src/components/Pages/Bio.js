import React from 'react'
import about from '../../assets/about.png'
import './Bio.css'
import video from '../../assets/video.mp4'
const Bio = () => {
  return (
    <div id="bio">
      <div className="first-container" data-aos="fade-up">
        <div className="text-container">
          <p id="name" >I’m Bako Doe</p>
          <p className="email1"  >robdavison@gmail.com</p>
          <p className="email2" >+91-9876543210</p>
          <div className="icons" >
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i class="fab fa-facebook-square text-white" style={{ fontSize: "25px",color:"white"  }} ></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i class="fab fa-instagram text-white" style={{ fontSize: "25px",color:"white"  }} ></i></a>
            <a href="https://www.twitte.com" target="_blank" rel="noreferrer">
              <i class="fab fa-twitter-square text-white" style={{ fontSize: "25px",color:"white" }} ></i></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin text-white" style={{ fontSize: "25px",color:"white"  }} ></i></a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <i class="fab fa-github-square text-white" style={{ fontSize: "25px",color:"white"  }}></i></a>
          </div>
          
        </div>
        <div className="img-container">
          <img id="image" src={about} alt="" />
        </div>
      </div>
      <div className="support">
      <p id="para">He lay on his armour-like back, and if he lifted his head a little  he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
      <button class="support-btn"><i class="fa fa-download"></i> Download CV</button>
      </div>
      <div className="second-container" data-aos="fade-up">
        <div className="second-text-container">
          <p className="second-title">Expertise and Interest</p>
          <video src={video} controls></video>
        </div>
        <div className="second-support">
          <p className='video-text'>He lay on his armour-like back, and if he lifted his head a little  he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        </div>
      </div>
    </div>
  )
}

export default Bio
