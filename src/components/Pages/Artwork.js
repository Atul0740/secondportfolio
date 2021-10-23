import React from 'react';
import "./Works.css";

function Artwork() {
    return (
        <section className="blogs">
            <div className="blogs_container">
                <div className="blog" data-aos="fade-up">
                    <div className="artwork_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="artwork_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }} className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="artwork_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }}className="blog_date">21 Oct 2020</p>
                </div>

                <div className="blog" data-aos="fade-up">
                    <div className="artwork_image"> </div>
                    <p style={{ color:"rgb(214, 45, 39)" }}> The Art of Investing </p>
                    <p style={{ color:"#0554d4" }}className="blog_date">21 Oct 2020</p>
                </div>
            </div>
        </section>
    )
}

export default Artwork