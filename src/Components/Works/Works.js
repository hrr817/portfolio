import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '../Loading';
import './style.css';

import { projectData } from './projectData';

const cacheImg = {}

function loadImage(name, url) {
     if(!url) return // exit if url doesn't exit
     return new Promise((resolve, reject) => {
          let img = new Image();
          
          img.addEventListener('load', () => {cacheImg[name] = url; resolve(img)})
          img.addEventListener('error', () => reject('invalid Url'))

          img.src = url;
     })
}

const ProjectCard = props => {

     const { ref, inView } = useInView();

     const { name, imageUrl, host_name, hostUrl, repo_name, repoUrl, status, tags } = props.data;
     const [state, setState] = useState()
     const [show, setShow] = useState(false)

     useEffect(() => {
          inView && setShow(true)
     }, [inView])

     useEffect(() => {
          // First time, load images
          if(!cacheImg.length) {
               loadImage(name, imageUrl)
               .then(res => setState(res))
               .catch(() => setState({hasError: true}));
          } else {
          // not first time, images are cached already
               setState(cacheImg[name])
          }
     }, [name, imageUrl])

     return (
          <div className={`box${show? ' slideFadeIn' : ''}`} ref={ref}>
               <div className="flex align-center thumbnail"> 
                    { state? state.hasError ?
                    <div className="flex justify-center align-center max"> Couldn't load image...</div> : 
                    <>
                         <div className="anim-thumbnail" style={{backgroundImage: `url(${state.src})`}}></div>
                         <span className="pill anim-state">motion...</span>
                    </>
                    :
                    <div className="flex justify-center align-center max"> <Loading /> </div> 
                    }
                    
               </div>
               <div className="flex column card">
                    <div className="flex p-text space-between align-center">
                         <span className="pill"> project </span>
                         <span className="value"> { name } </span>
                    </div>

                    <div className="flex p-text space-between align-center">
                         <span className="pill"> status </span>
                         <span className="value"> { status } </span>
                    </div>


                    <div className="flex p-text space-between align-center">
                         <span className="pill"> host </span>
                         <span className="value"> <a href={hostUrl}> { host_name } </a> </span>
                    </div>
                    
                    <div className="flex p-text space-between align-center">
                         <span className="pill"> repository </span>
                         <span className="value"> <a href={ repoUrl }> { repo_name } </a> </span>
                    </div>

                    
                    <div className="p-text">
                         <span className="pill"> tags  </span>
                         {tags.map(item => <span key={item} className="tag"> #{item} </span>)}
                    </div>
               </div>
          </div>
     )
}

const Works = () => {

     return (
          <div className="projects-container">
          {
               projectData.map(data => <ProjectCard key={data.name} data={data}/>)
          }
          </div>
     )
}

export default Works
