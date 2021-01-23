import React from 'react';
import './style.css';

import {ReactComponent as GithubIcon} from '../../assets/icons/github.svg'

const About = ({itemIndex}) => {

     return (
          <div className="flex column">
               <div className="flex tagline align-center">
                    I am a self-taught frontend web developer. <br/>I love building user interfaces.
               </div>
               <div className="paragraph fadeIn">
                    <h2> Where it all begins </h2>
                    <p> 
                         <i>
                         When I was a kid, I got fascinated by websites.<br/>
                         I developed a strong feeling to make these things by myself.<br/>
                         But I did not know how to build websites at that time.<br/>
                         I started with "mobile website builders" websites.<br/>
                         I had no idea where to get started. So, I found myself fiddling with Html, CSS, and a little Javascript.
                         </i>
                    </p>

                    <br/>

                    <h2> Fast forward to College </h2>
                    <p> 
                         <i>
                         I started learning web development (front-end) through online resources. <br/>
                         Though I wasn't that serious, it was no more than a hobby. <br/>
                         And in the last year of my college, I found myself spending more time fiddling with web technologies.<br/>
                         That was when I realized the hobby I started when I was a kid; has become my passion.<br/>
                         </i>
                    </p>
               </div>
               <br/>
               <div className="flex justify-center align-center">
                   <a href="https://github.com/hrr817"><span className="icon fadeIn"><GithubIcon/></span></a>
               </div>
          </div>
     )
}

export default About
