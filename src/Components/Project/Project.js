import React, { Component } from 'react'
import axios from 'axios'

import './Project.css'

import tuition2 from './image/tuition(2).jpg'
import tuition1 from './image/tuition(1).jpg'
import tuition3 from './image/tuition(3).jpg'
import tuition4 from './image/tuition(4).jpg'
import tuition5 from './image/tuition(5).jpg'


import nodejs from './skills/nodejs.png'
import expressjs from './skills/express.jpg'
import ejs from './skills/ejs.png'
import mongodb from './skills/mongodb.png'
import heroku from './skills/heroku.png'


export default class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }

    async componentDidMount() {
        const projects = await axios.get('https://pprathameshmore.github.io/projects.json')
        this.setState({
            projects: projects.data
        })
    }

    render() {

        const { projects } = this.state

        console.log(projects.skillIcons);

        const projectUI = projects.map((project, index) => {
            return (<div className="projects" id="projects" >
                <div className="card shadow-lg p-3 mb-5 bg-white rounded alert">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {project.projectScreenshots.map((screenshot, index) =>
                                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                            <img className="img-fluid project-screenshot" src={screenshot} alt="tuition" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h4 className="project-title">
                                {project.projectTitle}
                            </h4>
                            <p>
                                {project.projectDescription}
                            </p>
                            <h5>Technology</h5>
                            <p>{project.projectTech}</p>
                            <div className="row text-center">
                                {project.skillIcons.map(icon =>
                                    <>
                                        <img src={icon} className="logo-tech" alt="tech-logo" />
                                    </>
                                )}
                            </div>
                            <hr />
                            <div className="col-xs-3">
                                <a class="btn btn-outline-primary btn-learn btn-block" href={project.projectLearnMoreLink} role="button">Learn more</a>
                                <a class="btn btn-outline-primary btn-go btn-block" href={project.projectLearnMoreLink} role="button">Go to app</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        })

        return (
            <>
                <h4>Projects</h4>
                <hr />
                {projectUI}
                <a class="btn btn-outline-primary btn-learn btn-block" href="https://github.com/pprathameshmore/" role="button">See all projects on GitHub</a>
                <br />
            </>
        )
    }
}

