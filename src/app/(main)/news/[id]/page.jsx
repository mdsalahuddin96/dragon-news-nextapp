import LoginWith from "@/components/shared/homepage/rightsidebar/LoginWith";
import RightSideAdvertise from "@/components/shared/homepage/rightsidebar/RightSideAdvertise";
import { getNewsById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const data = await getNewsById(id);
  const news=data[0]
 
  const { category_id, title,  image_url, details } = news;

  return (

    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-9">
        <div className="border border-gray-200 p-4 rounded-xl">
         
          {/* card body */}
          <div className="my-3.5 space-y-5">
            
            <Image
              src={image_url}
              alt={title}
              width={400}
              height={400}
              className="w-full"
            />
            <h1 className="text-[20px] font-bold">{title}</h1>
            <p>{details}</p>
            <Link href={`/category/${category_id}`}>
              <button className="text-white font-medium cursor-pointer bg-[#D72050] p-2 flex gap-2 items-center">
              <FaArrowLeftLong />All news in this category
              </button>
            </Link>
          </div>
          {/* card footer */}
          {/* <div className="flex justify-between items-center">
            <div className="flex gap-0.5 items-center text-amber-500">
              <FaStar></FaStar> {rating.number}
            </div>
            <div className="flex gap-0.5 items-center font-bold">
              <FaEye></FaEye>
              {total_view}
            </div>
          </div> */}
        </div>
      </div>
      <div className="col-span-3">
        <LoginWith></LoginWith>
        <RightSideAdvertise></RightSideAdvertise>
      </div>
    </div>
  );
};

export default NewsDetails;
