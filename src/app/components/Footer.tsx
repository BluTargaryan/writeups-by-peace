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
    <footer className="py-12 flex flex-col items-center gap-4 md:py-28 xl:py-40">
    <Image 
      src={logo}
      width="0"
      height="0"
      sizes="100vw"
      className="h-11 w-11 cursor-pointer md:w-20 md:h-20 xl:w-24 xl:h-24"
      alt="Website logo"
      onClick={()=>redirectHandler()}
     />
     <p className={`${raleway.className} cursor-pointer text-xl md:text-3xl xl:text-4xl`} 
     onClick={()=>redirectHandler()}
     >made by Peace</p>
    </footer>
  )
}

export default Footer