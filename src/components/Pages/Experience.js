import React from 'react'
import Card from './Card'
const Experiences = () => {
    const style = { marginBottom: "250px"};
    return (
        <div class="maineducation" id='experience' style={{minHeight:"180vh"}}>
            <h2 class="title3" style={{color:"white"}} data-aos="flip-left" data-aos-once="true" >Experience</h2>
            <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, senectus arcu, id ullamcorper fermentum nibh commodo quis rhoncus. Donec lorem fermentum dignissim commodo integer. Id egestas nisi, lectus ipsum vel accumsan sed cursus pulvinar." isstars="1" stars="3" buttonInfo="View Certification" />
            <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, senectus arcu, id ullamcorper fermentum nibh commodo quis rhoncus. Donec lorem fermentum dignissim commodo integer. Id egestas nisi, lectus ipsum vel accumsan sed cursus pulvinar." isstars="1" stars="5" buttonInfo="View Certification" />
            <Card desg="UX Designer" company="Apple" date="Apr 2020 - May 2020" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, senectus arcu, id ullamcorper fermentum nibh commodo quis rhoncus. Donec lorem fermentum dignissim commodo integer. Id egestas nisi, lectus ipsum vel accumsan sed cursus pulvinar." isstars="1" stars="4" buttonInfo="View Certification" style={style}/>

        </div>
    )
}

export default Experiences
