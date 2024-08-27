import fetchBlogs from "@/utilis/fetch/FetchBlogs";
import { BlogPost } from "@/utilis/types/BlogPostTypes";
import React, { useEffect, useState } from "react";
import RecentCard from "./RecentCard"; // Uncomment this if RecentCard is available

const Recent = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchBlogs();
        setBlogs(response.slice(0, 3)); // Only store the first 3 blogs
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <div>
      <h2 className="font-semibold text-[26px] text-left mt-15">Recent Blogs</h2>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog: BlogPost) => (
          <div key={blog._id}>
            <hr />
            <div className="py-7">
              <RecentCard blog={blog} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
