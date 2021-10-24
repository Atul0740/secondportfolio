import React from 'react'
import './Course.css'

const Courses = () => {
    return (
        <div id='courses'>
            <div className="course-container">
            <h2 class="title1" style={{ color: "var(--blue)"}} >Courses</h2>
            <section className="blogs">
                <div className="blogs_container course_container" >
                    <div className="blog" >
                        <div className="blog_image"> </div>
                        <p style={{ color: "rgb(214, 45, 39)" }}> The Art of Investing</p>
                        <p style={{ color: "#0554d4" }} className="blog_date">21 Oct 2020</p>
                    </div>

                    <div className="blog" >
                        <div className="blog_image"> </div>
                        <p style={{ color: "rgb(214, 45, 39)" }}> The Art of Investing </p>
                        <p style={{ color: "#0554d4" }} className="blog_date">21 Oct 2020</p>
                    </div>

                    <div className="blog" >
                        <div className="blog_image"> </div>
                        <p style={{ color: "rgb(214, 45, 39)" }}> The Art of Investing </p>
                        <p style={{ color: "#0554d4" }} className="blog_date">21 Oct 2020</p>
                    </div>

                    <div className="blog" >
                        <div className="blog_image"> </div>
                        <p style={{ color: "rgb(214, 45, 39)" }}> The Art of Investing </p>
                        <p style={{ color: "#0554d4" }} className="blog_date">21 Oct 2020</p>
                    </div>

                    <div className="blog" >
                        <div className="blog_image"> </div>
                        <p style={{ color: "rgb(214, 45, 39)" }}> The Art of Investing </p>
                        <p style={{ color: "#0554d4" }} className="blog_date">21 Oct 2020</p>
                    </div>
                </div>
                
            </section>
            </div>
        </div>
    )
}

export default Courses
