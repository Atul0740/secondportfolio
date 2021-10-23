import React from 'react'
import Card from './Card'

const Education = () => {
   const style = { marginBottom: "300px"};
   return (

      <div class="maineducation" id='education' style={{minHeight:"150vh"}}>
         <h2 class="title3" style={{color:"white"}} data-aos="flip-left" data-aos-once="true" >Education</h2>
         <Card desg="10th CBSE" company="Sanjuba High School, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" />
         <Card desg="12th SSC" company="Shivaji Science College, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" />
         <Card desg="B.Tech (Computer Engineering)" company="G.H. Raisoni College of Engineering, Nagpur" date="Apr 2020 - May 2020" desc="" isStars="0" stars="" buttonInfo="View Certification" style={style}></Card>
      </div>
   )
}

export default Education
