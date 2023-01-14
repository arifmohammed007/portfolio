import React from 'react'
import './Nav.css'
import { BiHome } from 'react-icons/bi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiBookOpen } from 'react-icons/fi'
import { MdOutlineMessage } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><HiOutlineUserCircle /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FiBookOpen /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav