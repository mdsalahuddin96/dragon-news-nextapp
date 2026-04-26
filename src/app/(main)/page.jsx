import { redirect } from "next/navigation";

export default async function Home({params}) {
  redirect('/category/01')
}
