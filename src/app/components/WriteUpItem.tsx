'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const WriteUpItem = ({id,title, content}:any) => {
const router = useRouter()

const markup = { __html: content }

  return (
    <div className='col-span-1 h-60 bg-cover bg-center flex flex-col justify-end cursor-pointer'
    style={{backgroundImage:`url('https://images.unsplash.com/photo-1532630571098-79a3d222b00d?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}
    onClick={()=>{router.push(`/writeup/${id}`)}}
    >
       <div className='w-full h-14 text-selfPrimary bg-selfSecondary flex flex-col items-start justify-center px-2 gap-1 transition-all
       hover:h-full group
       xl:h-16 xl:px-4
       '>
        <h2 className='line-clamp-1 text-left xl:text-xl'>{title}</h2>
        <p className='text-xs xl:text-sm'>Gaming</p>
        <div className='text-sm text-left hidden w-full group-hover:line-clamp-3 xl:text-base' dangerouslySetInnerHTML={markup}/>
        </div> 
    </div>
  )
}

export default WriteUpItem