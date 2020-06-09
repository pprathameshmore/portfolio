import React from 'react'

import './Contact.css'

import { SocialMediaIconsReact } from 'social-media-icons-react'

export default function Contact() {
    return (
        <div className="contact card col shadow-lg p-3 mb-5 bg-white rounded alert" id="contact">
            <div className="card-content">
                <h4>Social accounts</h4>
                <hr />
                <div className="row contact-icon-row">
                    <SocialMediaIconsReact className="contact-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="3" roundness="49%" url="https://www.linkedin.com/in/prathamesh-more/" size="60" />
                    <div className="contact-icon" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="xing" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(40,101,103,1)" iconSize="3" roundness="49%" url="https://www.xing.com/profile/Prathamesh_More/cv" size="60" />
                    <div className="contact-icon" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(11,11,11,1)" iconSize="3" roundness="49%" url="https://github.com/pprathameshmore/" size="60" />
                    <div className="contact-icon" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="stackoverflow" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(244,139,50,1)" iconSize="3" roundness="49%" url="https://stackoverflow.com/users/6482248/prathamesh-more" size="60" />
                    <div className="contact-icon" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="medium" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(19,19,19,1)" iconSize="3" roundness="49%" url="https://medium.com/@pprathameshmore" size="60" />
                    <div className="contact-icon" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="googleplay" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(61,199,253,1)" iconSize="3" roundness="49%" url="https://play.google.com/store/apps/dev?id=7208870585980833426" size="60" />
                </div>
            </div>
        </div>
    )
}
