import { BlogPost } from "@/utilis/types/BlogPostTypes";
import React from "react";
import Image from "next/image";

const RecentCard = ({ blog }: { blog: BlogPost }) => {
  const formattedDate = blog.createdAt.split("T")[0];
  const getImage = blog.author
    ? blog.author.image
    : "/assets/Rectangle 130.png";

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="w-full shadow-md px-5 space-y-5">
      <div className="w-full h-48 relative">
        <Image
          src={getImage}
          alt="Author Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <p className="font-medium text-[18px] text-[#5E5873] text-left">
        {blog.title}
      </p>
      <div className="">
        <div className="w-full flex gap-2">
          <div className="rounded-full object-contain w-10 h-10">
            <Image
              src={blog.image}
              alt="blog-image"
              width={1}
              height={1}
              layout="responsive"
              className="rounded-full object-fill"
            />
          </div>
          <p className="text-[16px] text-[#B9B9C3]">By: </p>
          <p className="text-[#6E6B7B] text-[13px]">
            {blog.author?.name || "Unknown"}
          </p>
          <p className="text-[#B9B9C3] text-[13px]">{formattedDate}</p>
        </div>
        <div className="flex gap-2 mb-10">
          {blog.tags.map((tag) => (
            <span
              className="bg-[#F5F5F5] text-[#6E6B7B] font-medium text-[13px] rounded-[120px] px-5 py-2"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-left">{truncateText(blog.description, 100)}</div>
      </div>
    </div>
  );
};

export default RecentCard;
