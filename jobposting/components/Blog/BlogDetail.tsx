import React from 'react'
import fetchBlogById from '@/utilis/fetch/FetchBlogById'
import { useRouter } from "next/router";

const BlogDetail = async () => {
    const router = useRouter();
    const { id } = router.query;
    const response = await fetchBlogById(id:string);
  return (
    <div>
        
    </div>
  )
}

export default BlogDetail