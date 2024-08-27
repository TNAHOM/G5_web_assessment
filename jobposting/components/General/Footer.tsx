import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <>
      <hr className='mt-48 mb-24' />
      <div className="flex justify-between py-22 px-16">
        <div className="">
          <Image
            src="/assets/rafiki.svg"
            alt="footer"
            width={300}
            height={300}
          />
        </div>
        <div className=" space-y-10 max-w-72">
          <p className="font-semibold text-[24px]">
            Get involved in improving tech education in Africa!
          </p>
          <button className="bg-[#264FAD]  text-[20px] font-bold rounded-[10px] py-3 px-5 text-white">
            Support Us
          </button>
        </div>
        <div className="usual-small">
          <p className="font-semibold pb-3">Links</p>
          <p>Home</p>
          <p>Success Stories</p>
          <p>About us</p>
          <p>Get Invoved</p>
        </div>
        <div className="usual-small">
          <p className="font-semibold pb-3">Teams</p>
          <p>Board Members</p>
          <p>Advisors/Mentors</p>
          <p>Executives</p>
          <p>Staffs</p>
        </div>
        <div className="usual-small">
          <p className="font-semibold pb-3">Blogs</p>
          <p>Recent Blogs</p>
          <p>New Blog</p>
        </div>
      </div>
    </>
  );
}

export default Footer