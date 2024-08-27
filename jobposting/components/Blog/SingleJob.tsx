import { BlogPost } from "@/utilis/types/BlogPostTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleJob = ({ blog }: { blog: BlogPost }) => {
  const formattedDate = blog.createdAt.split("T")[0];
  const getImage = blog.author
    ? blog.author.image
    : "/assets/Rectangle 130.png";

  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <Link href={`/Blog-Detail/${blog._id}`}>
          <div className="flex gap-5">
            <div className="rounded-full object-contain w-20 h-20">
              <Image
                src={blog.image}
                alt="blog-image"
                width={80}
                height={80}
                layout="responsive"
                className="rounded-full object-fill"
              />
            </div>
            <div>
              <div className="font-semibold text-[20px] flex gap-3">
                <span>
                  {blog.author ? blog.author.name : "Author is not available"}
                </span>
                <span className="font-medium text-[17px] text-[#868686]">
                  {formattedDate}
                </span>
              </div>
              <div className="font-medium text-[16px] text-[#868686]">
                SOFTWARE ENGINEER
              </div>
            </div>
          </div>
        </Link>
        <div className="font-semibold text-[26px] mb-4">{blog.title}</div>
        <div className="font-normal text-[20px] text-[#737373]">
          {blog.description}
        </div>
        <div className="flex gap-5 mt-3">
          {blog.tags.map((tag) => (
            <span
              className="bg-[#F5F5F5] text-[#8E8E8E] font-medium text-[17px] rounded-[120px] px-7 py-3"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-1 w-full content-center relative">
        <Image
          src={getImage}
          alt="author-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default SingleJob;
