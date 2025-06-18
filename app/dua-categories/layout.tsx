import Categories from "@/components/Categories";
import ProfileDropdown from "@/components/ProfileDropdown";
import Sidebar from "@/components/Sidebar";

export default function DuaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col md:flex-row md:ml-24">
        <Categories />
        {children}
        <ProfileDropdown />
      </div>
    </div>
  );
}
