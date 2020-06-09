import React from 'react'
import Typewriter from 'typewriter-effect'
import './Intro.css'

const text = {
    paddingTop: '25px'
}

const profilePhoto = {
    borderRadius: '50%',
    height: '30%'
}

//websites, applications, and APIs

export default function Intro() {
    return (
        <div className="text-center intro" id="intro">
            <img title="Lol!!! It's me! :)" id="profile-photo" className="img-fluid "
                src="https://avatars2.githubusercontent.com/u/17108186?s=460&v=4" style={profilePhoto} alt="profile" />
            <h1 className="display-4">Prathamesh More</h1>
            <h5>Passionate, Self-taught Full Stack Web Developer that loves designing and building modern<Typewriter options={{ strings: ['websites.', 'applications.', 'APIs.'], autoStart: true, loop: true }} /></h5>
        </div>
    )
}

