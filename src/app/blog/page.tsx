import React, { useEffect, useState } from 'react'
import BlogComponent from '../components/blogComponent';

export default function BlogPage() {
  const [blog, setBlog] = useState([]);
  useEffect(()=>{
    async function setAllBlog(){
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/posts');

    }
  },[])
  
  type partialblog = Partial0
  return (
    <div>
      <BlogComponent
      key="_"
      >
    </div>
  )
}
