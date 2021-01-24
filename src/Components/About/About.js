import React from 'react';
import './style.css';
import resume from '../../assets/document/cv-itshrr17.pdf'

import {ReactComponent as GithubIcon} from '../../assets/icons/github.svg'

const About = ({itemIndex}) => {

     return (
          <div className="flex column">
               <strong className="flex tagline align-center">
                    I am a self-taught frontend web developer. <br/>I love building user interfaces.
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

                    <br/>

                    <h1> Fast forward to College </h1>
                    <p> 
                         I started learning web development (front-end) through online resources. <br/>
                         Though I wasn't that serious, it was no more than a hobby. <br/>
                         And in the last year of my college, I found myself spending more time fiddling with web technologies.<br/>
                         That was when I realized the hobby I started when I was a kid; has become my passion.<br/>
                    </p>

                    <br/>

                    <h1> Present </h1>
                    <p> 
                         I am learning web technologies and improving my current skills. <br/>
                         Also, looking for intership/jobs as a front-end developer. 
                         <br/> <br/>
                         I love playing chess, reading comics, novels and books, learning new skills, listening to jpop and watching anime.
                         <br/><br/>
                         Have something in mind, make use of words, write me at <a href="mailto:itshrr17@gmail.com" style={{color: 'inherit', transition: 'color 0.2s linear'}}>itshrr17@gmail.com</a> 
                    </p>
               </article>
               <div className="flex column justify-center align-center">
                    <a style={{padding: '1em', color: 'inherit', transition: 'color 0.2s linear'}} href={resume} download>Click here to download my resume</a>
                    <a href="https://github.com/hrr817"><span className="icon fadeIn"><GithubIcon/></span></a>
               </div>
          </div>
     )
}

export default About
