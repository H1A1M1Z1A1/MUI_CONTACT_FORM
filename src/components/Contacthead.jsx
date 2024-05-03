import React from 'react'
import Button from './Button'
import Contactform from './Contactform'

function Contacthead() {
  return (
    <div>
    <div className="Contacthead">
      <h1><b>CONTACT US</b></h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae rem architecto nihil, suscipit deleniti beatae incidunt fugit iusto fugiat autem sed eos blanditiis facilis iste distinctio enim dolor officiis!</p>
    </div>
    
    <div className="Contactform">
    <Contactform/>
    <div className="contact_pic">
      <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-internet-contact-us-png-image_5410730.jpg" alt="img" />
    </div>
    
    </div>
    

    </div>
  )
}

export default Contacthead
