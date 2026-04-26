import Advertise from "@/components/shared/homepage/Advertise";
import NewsCard from "@/components/shared/homepage/leftsidebar/NewsCard";
import NewsCategory from "@/components/shared/homepage/leftsidebar/NewsCategory";
import LoginWith from "@/components/shared/homepage/rightsidebar/LoginWith";
import RightSideAdvertise from "@/components/shared/homepage/rightsidebar/RightSideAdvertise";
import { getCategory, getNewByCategory } from "@/lib/getData";

export default async function NewsByCategory({ params }) {
  const { id } = await params;
  const data = await getCategory();
  const categories = data.news_category;
  const news = await getNewByCategory(id);

  return (
    <div className="grid grid-cols-12 my-10 gap-4 container mx-auto">
      <div className="col-span-3">
        <NewsCategory categories={categories} activeId={id}></NewsCategory>
        <Advertise />
      </div>
      <div className="col-span-6 ">
        <h1 className="text-lg font-semibold">News By Category</h1>
        <div className="space-y-4 mt-4">
          {news.length >0 ? (
            news.map((n) => <NewsCard key={n._id} n={n}></NewsCard>)
          ) : (
            <div className="text-center mt-10 text-gray-500 font-semibold text-3xl">No News Available</div>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <LoginWith></LoginWith>
        <RightSideAdvertise/>
      </div>
    </div>
  );
}
