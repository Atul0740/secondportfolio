import React from 'react'
import Card from './Card';
const Achievement = () => {
    const style = { marginBottom: "300px"};
    return (
        <div class="maineducation" id='achievements' style={{minHeight:"100vh"}}>
            <h2 class="title3" style={{color:"white"}} data-aos="flip-left" data-aos-once="true" >Achievements</h2>
           <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="" isstars="0" stars="" buttonInfo="View Certification" />
           <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="" isstars="0" stars="" buttonInfo="View Certification" style={style}/>
        </div>
    )
}

export default Achievement
