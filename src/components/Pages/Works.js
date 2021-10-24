import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Articles from './Articles';
import Artwork from './Artwork';
import Projects from './Projects';
import Presentations from './Presentations';
import Blogs from './Blogs';
import Skillvideos from './Skillvideos';
import "./Works.css";
import $ from 'jquery';



function Works() {


    function linkSwitched() { }
    $(document).ready(function(){$("a[href='/work/blogs']").trigger('click'); });


    return (
        <>
            <section className="work" id='works'>
                <div className="work-container">
                    <p data-aos="fade-up" className='title1'>My Work</p>
                    <div className="work_sublinks" data-aos="fade-up">
                        <nav>
                            <ul>
                                <li className="work_sublink" clicked="true" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" exact to="/work/blogs" num="0" >Blogs</NavLink></li>
                                
                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/artwork" num="2">Artwork</NavLink></li>
                                <li className="work_sublink"  onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link"  to="/work/skillvideos" num="0" ><span style={{minWidth:"200px"}}>Skill Videos</span></NavLink></li>

                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/projects" num="3">Projects</NavLink></li>

                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/presentations" num="5">Presenations</NavLink></li>
                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/articles" num="1" >Articles</NavLink></li>
                            </ul>
                        </nav>
                        
                    </div>
                    <br />
                    <Switch>
                        <Route exact path="/work/blogs" component={Blogs} />
                        <Route exact path="/work/articles" component={Articles} />
                        <Route exact path="/work/artwork" component={Artwork} />
                        <Route exact path="/work/projects" component={Projects} />
                        <Route exact path="/work/presentations" component={Presentations} />
                        <Route exact path="/work/skillvideos" component={Skillvideos} />
                    </Switch>
                </div>
            </section>
        </>
    )
}

export default Works