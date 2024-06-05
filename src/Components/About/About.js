import React from 'react';
import './style.css';

import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg'

const About = ({ itemIndex }) => (
    <div className="flex column">
        <strong className="flex tagline align-center">
            I am a self-taught software developer. <br/>I love building user interfaces.
        </strong>
        
        <article className="paragraph fadeIn">
            <h1> Where it all begins </h1>
            <p> 
                When I was a kid, I got fascinated by websites.<br/>
                I developed a strong feeling to make these things by myself.<br/>
                But I did not know how to build websites at that time.<br/>
                I started with "mobile website builders" websites.<br/>
                I had no idea where to get started. So, I found myself fiddling with Html, CSS, and a little Javascript.
            </p>

            <br/> <br/>

            <h1> Fast forward to College </h1>
            <p> 
                I started learning web development (front-end) through online resources. <br/>
                Though I wasn't that serious, it was no more than a hobby. <br/>
                And in the last year of my college, I found myself spending more time fiddling with web technologies.<br/>
                That was when I realized the hobby I started when I was a kid has become my passion.<br/>
            </p>

            <br/> <br/>

            <h1 style={{ color: '#84b84d' }}> Landed my first ever internship/job as Software Developer </h1>
            <p> 
                I started working on their web-based product. With the help of other developers, I was able to learn a lot. <br/>
                I learned how to work with a team, write better code and technologies that were new to me.<br/>
                Though, I still have endless things more to learn and <strong style={{ fontWeight: 700, fontSize: '1.3rem' }}>"I know nothing."</strong><br/>
            </p>
            <br/> <br/>
            <h1 style={{ color: '#84b84d' }}> back to learning </h1>
            <p> 
                After working for 2 years, I have left working and being back to being a student again. Learning about machine learning and AI.<br/>
                Currently, learning mathematics required for machine learning.<br/>
                Trying to understand fasinating math behind machine learning models.<br/>
                Aim is to build models from scratch, and have deep understanding of machine learning models...<br/>
                
            </p>
            <h1> Little more... </h1>
            <p> 
                I love playing chess, exercising, reading manga, novels, and books, learning new skills, listening to J-pop and watching anime.
                <br/><br/>
                Have something in mind, make use of words, write me at <a href="mailto:itshrr17@gmail.com" style={{color: 'inherit', transition: 'color 0.2s linear'}}>itshrr17@gmail.com</a> 
            </p>
        </article>
        <div className="flex column justify-center align-center">
            <a style={{padding: '1em', color: 'inherit', transition: 'color 0.2s linear'}} href="/Resume.pdf" download>Check out my resume</a>
            <a href="https://github.com/hrr817"><span className="icon fadeIn"><GithubIcon/></span></a>
        </div>
    </div>
)

export default About
