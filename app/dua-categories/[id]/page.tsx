import DuaComponent from "@/components/DuaComponent";
import { NextPage } from "next";

// Use Next.js's built-in type for dynamic route pages
type SubCategoryPageProps = {
  params: Promise<{ id: string }>; // params is a Promise in Next.js 13+
};

// Use NextPage type for the page component
const page: NextPage<SubCategoryPageProps> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <DuaComponent id={id} />
    </div>
  );
};

export default page;
