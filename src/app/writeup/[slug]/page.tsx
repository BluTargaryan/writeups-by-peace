import React from 'react'
import Image from "next/image";
import logo from '../../images/stripped-logo.svg'
import { raleway } from '@/app/utils/importedFonts';
import Footer from '@/app/components/Footer';

const page = () => {
const topImage= "https://images.unsplash.com/photo-1532630571098-79a3d222b00d?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
   <main className='py-5 px-4 flex flex-col gap-8 md:py-8 md:px-10 md:gap-9 xl:gap-11'>
<nav className='h-8 w-fit gap-3 flex items-center justify-between cursor-pointer 
hover:border-b hover:border-selfSecondary group
md:h-12 md:gap-4
xl:h-16 xl:gap-6 xl:hover:border-b-2
'>
<Image 
    src={logo}
    width="0"
    height="0"
    sizes="100vw"
    className="h-5 w-5 
    md:h-8 md:w-8
    xl:h-14 xl:w-14
    "
    alt="Website logo"
   />
   <span className='text-sm md:text-base xl:text-xl xl:hidden xl:group-hover:block'>
   Go to writeups
   </span>
</nav>

<div  className="h-64 w-full rounded-xl overflow-hidden flex items-center justify-center md:h-80 xl:h-[628px]">
<Image 
    src={topImage}
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full rounded-xl"
    alt="Website logo"
   />
</div>


<h1 className={`${raleway.className} text-3xl md:text-4xl xl:text-6xl`}>Writeups by Peace</h1>

<div className='flex flex-col text-sm gap-1 xl:text-base'>
<h3 className='font-semibold'>Gaming</h3>
<p>12 August 2024</p>
</div>

<div className='xl:text-2xl'>
Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
</div>

<Footer />
    </main>
  )
}

export default page