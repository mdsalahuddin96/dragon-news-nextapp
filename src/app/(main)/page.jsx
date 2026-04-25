import NewsCategory from "@/components/shared/homepage/leftsidebar/NewsCategory";

async function getCategory() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const data = await getCategory();
  const categories = data.news_category;

  return (
    <div className="grid grid-cols-12 my-10 gap-4 container mx-auto">
      <div className="col-span-3">
        <NewsCategory categories={categories}></NewsCategory>
      </div>
      <div className="col-span-6 bg-green-400">News</div>
      <div className="col-span-3 bg-blue-400">Login With</div>
    </div>
  );
}
