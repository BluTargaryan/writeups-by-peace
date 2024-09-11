'use client'

import React from 'react'
import Image from "next/image";
import { raleway } from "../utils/importedFonts";
import logo from '../images/stripped-logo.svg'

const Footer = () => {
    const redirectHandler = () =>{
        window.open('https://peaceakoja-portfolio-v2.vercel.app/', '_blank', 'noopener,noreferrer');
      }
  return (
    <footer className="py-12 flex flex-col items-center gap-4">
    <Image 
      src={logo}
      width="0"
      height="0"
      sizes="100vw"
      className="h-11 w-11 cursor-pointer"
      alt="Website logo"
      onClick={()=>redirectHandler()}
     />
     <p className={`${raleway.className} cursor-pointer text-xl`} 
     onClick={()=>redirectHandler()}
     >made by Peace</p>
    </footer>
  )
}

export default Footer