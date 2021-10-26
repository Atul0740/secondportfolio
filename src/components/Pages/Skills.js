import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skill' id='skills'>
      <div className="skill-container">
        <div className="title"  >My Skills</div>
        <div className="skill-bars" data-aos="fade-up">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html"  >
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css" >
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>jQuery</span>
            </div>
            <div class="progress-line jquery" >
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Python</span>
            </div>
            <div class="progress-line python" >
              <span></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>MySQL</span>
            </div>
            <div class="progress-line mysql" >
              <span></span>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Skills
