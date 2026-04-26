import { metadata } from "@/app/layout";
import LoginWith from "@/components/shared/homepage/rightsidebar/LoginWith";
import RightSideAdvertise from "@/components/shared/homepage/rightsidebar/RightSideAdvertise";
import { getNewsById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await getNewsById(id);
  const news = data[0];
  const { title,details } = news;
  return{
    title:title,
    description:details
  }
}
const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const data = await getNewsById(id);
  const news = data[0];
  const { category_id, title, image_url, details } = news;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-9">
          <h1 className="text-lg font-semibold">Dragon News</h1>
          <div className="border border-gray-200 p-4 rounded-xl mt-4">
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
                  <FaArrowLeftLong />
                  All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <LoginWith></LoginWith>
          <RightSideAdvertise></RightSideAdvertise>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
