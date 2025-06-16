import Categories from "@/components/Categories";
import DuaComponent from "@/components/DuaComponent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="flex ml-28 flex-col lg:flex-row">
        <Categories />
        <DuaComponent />
      </div>
    </div>
  );
}
