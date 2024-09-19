'use client'
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import logo from '../../images/stripped-logo.svg'
import { raleway } from '@/app/utils/importedFonts';
import Footer from '@/app/components/Footer';
import { useParams } from 'next/navigation'


const page = () => {
const topImage= "https://images.unsplash.com/photo-1532630571098-79a3d222b00d?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const params = useParams<{ slug: string }>();
const [post, setPost] = useState<any>(null);

const getPost = async () => {
  try {
    const response = await fetch(`http://localhost/writeupsByPeace/wp-json/wp/v2/posts/${params.slug}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const retrievedPost = await response.json();
    setPost(retrievedPost);
  } catch (error) {
    console.error('Failed to fetch post:', error);
  }
};

useEffect(() => {
  getPost();
}, [params.slug]); 



//to format date
const dateFormatter = (x:string) =>{
  const dateString = x;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-GB',  { day: "numeric", month: "long", year: "numeric" });

  return formattedDate
}

//
const markupSetup = (content:any)=>{
 const markup = { __html: content }
 return markup
}

const  extractImageLinks = (htmlContent:any)=> {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  
  // Parse the HTML content into a DOM Document
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  // Query all image elements in the document
  const images = doc.querySelectorAll('img');
  
  // Extract the src attribute from each image element
  const imageLinks = Array.from(images).map(img => img.src);
  console.log(imageLinks)

  if (imageLinks.length === 0) return topImage
  
  // Return the list of image links
  return imageLinks[0];
}

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



{post && 
<>
<div  className="h-64 w-full rounded-xl overflow-hidden flex items-center justify-center md:h-80 xl:h-[628px]">
<Image 
    src={extractImageLinks(post.content.rendered)}
    width="0"
    height="0"
    sizes="100vw"
    className="h-auto w-full rounded-xl"
    alt="Website logo"
   />
</div>

  <h1 className={`${raleway.className} text-3xl md:text-4xl xl:text-6xl`}>{post.title.rendered}</h1>

  <div className='flex flex-col text-sm gap-1 xl:text-base'>
<h3 className='font-semibold'>Gaming</h3>
<p>{dateFormatter(post.date)}</p>
</div>

<div className='xl:text-2xl'dangerouslySetInnerHTML={markupSetup(post.content.rendered)} />
</>
}






<Footer />
    </main>
  )
}

export default page