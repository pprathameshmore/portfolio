import React from 'react'

import './Skill.css'

import html5 from './skills/html5.png'
import css3 from './skills/css3.png'
import javascript from './skills/javascript.png'
import bootstrap from './skills/bootstrap.png'
import jquery from './skills/jquery.png'
import ejs from './skills/ejs.png'
import react from './skills/react.png'

//Backend

import nodejs from './skills/nodejs.png'
import expressjs from './skills/express.jpg'
import firebase from './skills/firebase.png'
import mongodb from './skills/mongodb.png'
import mysql from './skills/mysql.png'
import postgresql from './skills/postgresql.png'
import redis from './skills/redis.png'

//Other

import github from './skills/github.png'
import git from './skills/git.png'
import heroku from './skills/heroku.png'
import cpp from './skills/c++.png'
import java from './skills/java.png'

export default function Skill() {
    return (
        <div className="skills" id="skills">
            <h4>Skills</h4>
            <hr />
            <div className="card col shadow-lg p-3 mb-5 bg-white rounded alert" >
                <div>
                    <div className="card-content">
                        <h4>Frontend</h4>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <img src={html5} className="responsive-img logo" alt="html5" />
                                                 HTML5
                                </div>
                            <div className="col">
                                <img src={css3} className="responsive-img logo" alt="css3" />
                                CSS3
                            </div>
                            <div className="col">
                                <img src={javascript} className="responsive-img logo" alt="js" />
                                JavaScript
                            </div>
                            <div className="col">
                                <img src={bootstrap} className="responsive-img logo" alt="bootstrap" />
                                Bootstrap
                            </div>
                            <div className="col">
                                <img src={jquery} className="responsive-img logo" alt="jquery" />
                                JQuery
                            </div>
                            <div className="col">
                                <img src={ejs} className="responsive-img logo" alt="ejs" />
                                EJS
                            </div>
                            <div className="col">
                                <img src={react} className="responsive-img logo" alt="react.js" />
                                React.js
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-content">
                        <h4>Backend</h4>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <img src={nodejs} className="responsive-img logo" alt="nodejs" />
                                                 Node.js
                                </div>
                            <div className="col">
                                <img src={expressjs} className="responsive-img logo" alt="expressjs" />
                                Express.js
                            </div>
                            <div className="col">
                                <img src={mongodb} className="responsive-img logo" alt="mongodb" />
                                MongoDB
                            </div>
                            <div className="col">
                                <img src={postgresql} className="responsive-img logo" alt="postgresql" />
                                PostgreSQL
                            </div>
                            <div className="col">
                                <img src={mysql} className="responsive-img logo" alt="mysql" />
                                MySQL
                            </div>

                            <div className="col">
                                <img src={redis} className="responsive-img logo" alt="redis" />
                                Redis
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="card-content">
                        <h4>Other</h4>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <img src={git} className="responsive-img logo" alt="git" />
                                 Git
                                </div>
                            <div className="col">
                                <img src={github} className="responsive-img logo" alt="github" />
                                GitHub
                            </div>
                            <div className="col">
                                <img src={heroku} className="responsive-img logo" alt="heroku" />
                                Heroku
                            </div>
                            <div className="col">
                                <img src={cpp} className="responsive-img logo" alt="cpp" />
                                C++
                            </div>
                            <div className="col">
                                <img src={java} className="responsive-img logo" alt="java" />
                                Java
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
