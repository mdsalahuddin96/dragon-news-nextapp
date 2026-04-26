import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ n }) => {
  const { _id, title, author, image_url, total_view, rating, details } = n;
  const { img, published_date } = author;
  const name = author?.name;
 

  return (
    <div className="border border-gray-200 p-4 rounded-xl">
      {/* card-header */}
      <div className="bg-gray-100 border p-2 flex justify-between items-center">
        <div className="flex gap-1.5">
          <Image
            src={img}
            alt={!name?'author name':name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <CiBookmark size={20} />
          <CiShare2 size={20} />
        </div>
      </div>
      {/* card body */}
      <div className="my-3.5 space-y-5">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <Image
          src={image_url}
          alt={title}
          width={400}
          height={400}
          className="w-full"
        />
        <p className="line-clamp-3">{details}</p>
        <Link href={`/news/${_id}`}>
          <button className="text-amber-500 font-semibold cursor-pointer bg-gray-100 p-2 rounded-xl">
            Read More
          </button>
        </Link>
      </div>
      {/* card footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-0.5 items-center text-amber-500">
          <FaStar></FaStar> {rating.number}
        </div>
        <div className="flex gap-0.5 items-center font-bold">
          <FaEye></FaEye>
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
