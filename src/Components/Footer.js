import React from 'react'
const Footer = () => {
     const year = new Date().getFullYear()

     return (
          <div className="footer"> itshrr17 © {year} </div>
     )
}

export default React.memo(Footer)
