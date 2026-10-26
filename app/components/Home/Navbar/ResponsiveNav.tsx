"use client";
import { useState } from 'react';
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {

  const[showNav, setShowNav] = useState(false);

  const openNavHandle = () => setShowNav(true);
    const closeNavHandle = () => setShowNav(false);

  return (
    <div>
        <Nav openNav={openNavHandle} />
        <MobileNav showNav={showNav} closeNav={closeNavHandle} />
   </div>
  )
}

export default ResponsiveNav