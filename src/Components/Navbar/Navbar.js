import React from 'react';

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light sticky-top fixed-top shadow-lg p-3 mb-5 bg-white rounded alert container">
            <a className="navbar-brand btn" title="Prathamesh More's Portfolio" href="#intro">
                <ion-icon name="code"></ion-icon> Prathamesh More
			</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" title="Know about me" href="#about">About<span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" title="Know about me" href="#skills">Skills<span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" title="I build things!" href="#projects">Projects</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" title="Say hi!" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" title="Learn stuff!" href="https://medium.com/@pprathameshmore">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" title="Download my resume!" href="http://bit.ly/prathameshmore">Resume</a>
                    </li>
                </ul>
                <span className=" btn navbar-text">
                    <a href="https://github.com/pprathameshmore/pprathameshmore.github.io/fork" title="Fork on GitHub">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </span>
            </div>
        </nav>
    );
}
