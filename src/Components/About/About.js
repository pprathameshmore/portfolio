import React, { Component } from 'react'
import axios from 'axios'
import './About.css'

export class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            aboutText: 'I\'m Prathamesh More, currently intern as Backend Developer at Illumnus.I’m eager to learn, proactive, meticulous and I love nothing more than working with people, building amazing software and solving technical problems.My major area of interest is Backend Development, Open Source, Data Structure, and Algorithms.I have experience in programming in C++, Java, JavaScript, NodeJS.I am a patient learner and like to work in collaboration.I am an Open Source enthusiast.I have good experience with Version Control System.I am actively contributing to the Open Source Community for the last 1+ years.I did my Summer 2016 internship at RacksonsIT, Jaysingpur working with C - Sharp MVC technology, Windows, and WebForms.I looking for opportunities to applying my skills in real - world problem- solving'
        }
    }

    async componentDidMount() {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        //this.setState({ aboutText: response.data });
    }

    render() {

        const { aboutText } = this.state;

        return (
            <div className="about card col shadow-lg p-3 mb-5 bg-white rounded alert" id="about">
                <div className="card-content">
                    <h4>About</h4>
                    <hr />
                    <p className="display-5">{aboutText}</p>
                </div>
            </div>
        )
    }
}

export default About
