import React from 'react'

const Loading = () => {
     return (
          <div className="spinner">
               <div className="bounce1"></div>
               <div className="bounce2"></div>
               <div></div>
          </div> 
     )
}

export default React.memo(Loading)