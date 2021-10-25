import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import Artwork from './Artwork';
import Projects from './Projects';
import Presentations from './Presentations';
import Blogs from './Blogs';
import Skillvideos from './Skillvideos';
import "./Works.css";



function Works() {

    useEffect(() => {
       document.getElementById('work-blog');
    })

    const [blogclicked, setblogclicked] = useState(true);
    const [artwork, setartwork] = useState(false);
    const [skill, setskill] = useState(false);
    const [projects, setprojects] = useState(false);
    const [presentation, setpresentation] = useState(false);
    const [article, setarticle] = useState(false)
    const linkSwitchedBlog=()=>{
        setblogclicked(true);
        setartwork(false);
        setprojects(false);
        setskill(false);
        setpresentation(false);
        setarticle(false);
        document.getElementById('work-blog').classList.add('active');
        document.getElementById('work-artwork').classList.remove('active');
        document.getElementById('work-skill').classList.remove('active');
        document.getElementById('work-projects').classList.remove('active');
        document.getElementById('work-presentation').classList.remove('active');
        document.getElementById('work-article').classList.remove('active');
    }
    const linkSwitchedArtwork=()=>{
        setblogclicked(false);
        setartwork(true);
        setprojects(false);
        setskill(false);
        setpresentation(false);
        setarticle(false);
        document.getElementById('work-blog').classList.remove('active');
        document.getElementById('work-artwork').classList.add('active');
        document.getElementById('work-skill').classList.remove('active');
        document.getElementById('work-projects').classList.remove('active');
        document.getElementById('work-presentation').classList.remove('active');
        document.getElementById('work-article').classList.remove('active');
    }
    const linkSwitchedSkill=()=>{
        setblogclicked(!true);
        setartwork(false);
        setprojects(false);
        setskill(!false);
        setpresentation(false);
        setarticle(false);
        document.getElementById('work-blog').classList.remove('active');
        document.getElementById('work-artwork').classList.remove('active');
        document.getElementById('work-skill').classList.add('active');
        document.getElementById('work-projects').classList.remove('active');
        document.getElementById('work-presentation').classList.remove('active');
        document.getElementById('work-article').classList.remove('active');
    }
    const linkSwitchedProjects=()=>{
        setblogclicked(!true);
        setartwork(false);
        setprojects(!false);
        setskill(false);
        setpresentation(false);
        setarticle(false);
        document.getElementById('work-blog').classList.remove('active');
        document.getElementById('work-artwork').classList.remove('active');
        document.getElementById('work-skill').classList.remove('active');
        document.getElementById('work-projects').classList.add('active');
        document.getElementById('work-presentation').classList.remove('active');
        document.getElementById('work-article').classList.remove('active');
    }
    const linkSwitchedPresentation=()=>{
        setblogclicked(!true);
        setartwork(false);
        setprojects(false);
        setskill(false);
        setpresentation(!false);
        setarticle(false);
        document.getElementById('work-blog').classList.remove('active');
        document.getElementById('work-artwork').classList.remove('active');
        document.getElementById('work-skill').classList.remove('active');
        document.getElementById('work-projects').classList.remove('active');
        document.getElementById('work-presentation').classList.add('active');
        document.getElementById('work-article').classList.remove('active');
    }
    const linkSwitchedArticle=()=>{
        setblogclicked(!true);
        setartwork(false);
        setprojects(false);
        setskill(false);
        setpresentation(false);
        setarticle(!false);
        document.getElementById('work-blog').classList.remove('active');
        document.getElementById('work-artwork').classList.remove('active');
        document.getElementById('work-skill').classList.remove('active');
        document.getElementById('work-projects').classList.remove('active');
        document.getElementById('work-presentation').classList.remove('active');
        document.getElementById('work-article').classList.add('active');
    }

    return (
        <>
            <section className="work" id='works'>
                <div className="work-container">
                    <p data-aos="fade-up" className='title1'>My Work</p>
                    <div className="work_sublinks" data-aos="fade-up">
                        <nav>
                            <ul>
                                <li className="work_sublink" onClick={linkSwitchedBlog}> <button className="work-btn" id='work-blog'>Blogs</button></li>
                                <li className="work_sublink" onClick={linkSwitchedArtwork}><button className="work-btn" id="work-artwork">Artworks</button></li>
                                <li className="work_sublink" onClick={linkSwitchedSkill}><button className="work-btn" id="work-skill">Skill Videos</button></li>
                                <li className="work_sublink" onClick={linkSwitchedProjects}><button className="work-btn" id="work-projects">Projects</button></li>
                                <li className="work_sublink" onClick={linkSwitchedPresentation}><button className="work-btn" id="work-presentation">Presentations</button></li>
                                <li className="work_sublink" onClick={linkSwitchedArticle}><button className="work-btn" id="work-article">Articles</button></li>
                            </ul>
                        </nav>
                    </div>
                    {blogclicked && <Blogs/>}
                    {artwork && <Artwork/>}
                    {skill && <Skillvideos/>}
                    {projects && <Projects/>}
                    {presentation && <Presentations/>}
                    {article && <Articles/>}
                </div>
            </section>
        </>
    )
}

export default Works