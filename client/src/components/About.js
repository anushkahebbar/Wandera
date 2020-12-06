import React, {useContext} from 'react';
import {UserContext} from "../App";
import "./About.css";
import ProfilePic from "../images/profilepic.jpg";

const About = () => {
    const {state, dispatch} = useContext(UserContext);

    return (
        <div className="about">
            <div className="about-container">
                <div className='user-image'>
                    <img src={ProfilePic} alt="User"/>
                </div>
                <div className='user-info'>
                    <div className="Name">{state.name}</div>
                    <div className="Username">Username</div>
                    <div className="user-stats">
                        <span>10 Stories</span>
                        <span>100 followers</span>
                        <span>120 following</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;