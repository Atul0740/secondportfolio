
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Articles from './Articles';
import Artwork from './Artwork';
import Projects from './Projects';
import Presentations from './Presentations';
import Blogs from './Blogs';
import "./Works.css";




function Works() {


    function linkSwitched() { }


    return (
        <>
            <section className="work" id='works'>
                <div className="work-container">
                    <p data-aos="fade-up" className='title1'>My Work</p>
                    <div className="work_sublinks" data-aos="fade-up">
                        <nav>
                            <ul>
                                <li className="work_sublink" clicked onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" exact to="/work" num="0" >Blogs</NavLink></li>
                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/artwork" num="2">Artwork</NavLink></li>


                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/projects" num="3">Projects</NavLink></li>

                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/presentations" num="5">Presenations</NavLink></li>
                                <li className="work_sublink" onClick={linkSwitched}><NavLink style={{ textDecoration: "none", padding: "10px 15px" }} activeClassName="active_link" to="/work/articles" num="1" >Articles</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <br />
                    <Switch>
                        <Route exact path="/work" component={Blogs} />
                        <Route exact path="/work/articles" component={Articles} />
                        <Route exact path="/work/artwork" component={Artwork} />
                        <Route exact path="/work/projects" component={Projects} />
                        <Route exact path="/work/presentations" component={Presentations} />

                    </Switch>
                </div>
            </section>
        </>
    )
}

export default Works