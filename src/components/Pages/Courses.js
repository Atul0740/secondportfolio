import React from 'react'

const Courses = () => {
    return (
        <div id='courses' style={{minHeight:"120vh"}}>
            <h2 class="title3" style={{color:"var(--blue)",marginLeft:"110px"}} data-aos="flip-left" >Courses</h2>
            <section className="blogs">
            <div className="blogs_container" style={{paddingLeft:"100px"}}>
                <div className="blog" data-aos="fade-up">
                    <div className="blog_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing</p>
                    <p style={{ color:"#0554d4" }}className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="blog_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="blog_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)"}}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="blog_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="blog_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Courses
