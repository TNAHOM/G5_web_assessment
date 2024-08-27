import Search from "@/components/Blog/search";
import fetchBlogs from "@/utilis/fetch/FetchBlogs";
import SingleJob from "@/components/Blog/SingleJob";
import { BlogPost } from "@/utilis/types/BlogPostTypes";

const BlogPage = async () => {
  const response = await fetchBlogs();
  // const token = localStorage.getItem("token");
  // console.log(token, "token");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-4/6">
        <div className="flex justify-between">
          <h3 className="font-semibold text-[36px] w-1/2">Blog</h3>
          <div className="w-full">
            <Search />
          </div>
          <div className="text-right w-1/2">
            <button className="text-white bg-[#264FAD] font-semibold text-[18px] rounded-[100px] px-4 py-3">
              Add Blog
            </button>
          </div>
        </div>
        <div className="mt-10">
          {response.slice(0, 6).map((blog: BlogPost) => (
            <div key={blog._id}>
              <hr />
              <div className="py-7">
                <SingleJob blog={blog} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
