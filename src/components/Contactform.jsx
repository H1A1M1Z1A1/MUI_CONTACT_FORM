import React from 'react'
import Button from './Button'
import {MdMessage} from "react-icons/md"


function Contactform() {
  return (


    <div className="Contactform_inputs">
    <div className="top_btn">
    <Button
    text="VIA SUPPORT CHAT"
    icon={<MdMessage fontSize="15px"/>}
    />
    <Button
    text="VIA SUPPORT CHAT"
    icon={<MdMessage fontSize="15px"/>}
    />
    </div>
    <Button
    isOutline={true}
    text="VIA SUPPORT CHAT"
    icon={<MdMessage fontSize="15px"/>}
    />
      <label htmlFor="name">Name</label>
      <input type="text" name='name' />
      <label htmlFor="name">Email</label>
      <input type="text" name='email' />
      <label htmlFor="name">Number</label>
      <input type="text" name='number' />
      <label htmlFor="name">Message</label>
      <textarea type="text" name='message' rows="15" />
      <div className="sbt_btn">
      <Button
    text="VIA SUPPORT CHAT"
    icon={<MdMessage fontSize="15px"/>}
    />
    </div>
    </div>
    
    
  )
}

export default Contactform
