import React from 'react';
import "./Works.css";
import CourseCard from './CourseCard';
function Projects() {
    return (
        <section className="blogs">
            <div className="blogs_container" data-aos="fade-up">
            <CourseCard
                    imgsrc='https://cdn.w600.comps.canstockphoto.com/brown-gift-boxes-with-red-ribbons-and-stock-photo_csp76498340.jpg'
                    title="The Art of Investing"
                    subtitle="21 Oct 2020"
                    link="https://www.instagram.com"
                />
                <CourseCard
                    imgsrc='https://cdn.w600.comps.canstockphoto.com/brown-gift-boxes-with-red-ribbons-and-stock-photo_csp76498340.jpg'
                    title="The Art of Investing"
                    subtitle="Duration : 6 hrs."
                    link="https://www.instagram.com"
                />
                <CourseCard
                    imgsrc='https://cdn.w600.comps.canstockphoto.com/brown-gift-boxes-with-red-ribbons-and-stock-photo_csp76498340.jpg'
                    title="The Art of Investing"
                    subtitle="Duration : 6 hrs."
                    link="https://www.instagram.com"
                />
            </div>
        </section>
    )
}

export default Projects