"use client";
import { useState } from "react";
import { useGetCategoriesWithSubCategoriesQuery } from "@/redux/api/categoryApi";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface SubCategory {
  subcat_id: number;
  subcat_name_en: string;
  subcat_name_bn: string;
  no_of_dua: number;
}

interface Category {
  id: number;
  cat_id: number;
  cat_name_en: string;
  cat_name_bn: string;
  no_of_dua: number;
  no_of_subcat: number;
  cat_icon: string;
  subCategories: SubCategory[];
}

export default function Categories() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { data, isLoading, isError } =
    useGetCategoriesWithSubCategoriesQuery(undefined);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const toggleSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  if (isLoading) return <p className="p-6">Loading categories...</p>;
  if (isError)
    return <p className="p-6 text-red-600">Failed to load categories.</p>;

  const categories: Category[] = data?.data || [];

  const filteredCategories = categories.filter((cat) =>
    cat.cat_name_en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden cursor-pointer fixed top-4 left-4 z-50 p-2 rounded-md shadow-xs focus:outline-none bg-green-500 text-white"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Wrapper */}
      <div
        className={`
          fixed top-0 left-0 w-4/5 max-w-xs h-full z-40 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:w-full lg:max-w-sm lg:h-auto lg:shadow-none
        `}
      >
        <div className="w-full h-full px-4 py-6 overflow-y-auto lg:max-w-sm">
          <h2 className="text-lg font-bold mb-6 text-center lg:text-left lg:text-xl text-green-600">
            Dua Page
          </h2>

          <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
            {/* Header */}
            <div className="text-center py-4 text-lg lg:text-xl font-semibold bg-green-500 text-white">
              Categories
            </div>

            {/* Search Box */}
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search by category name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Category Accordion */}
            <div className="divide-y divide-gray-200">
              {filteredCategories.map((cat) => (
                <div key={cat.id} className="px-4">
                  <div
                    onClick={() => toggleAccordion(cat.id)}
                    className="flex items-center justify-between gap-4 py-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon handling can go here */}
                      <div>
                        <h3 className="text-base font-medium text-green-700">
                          {cat.cat_name_en}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Subcategories: {cat.subCategories?.length || 0}
                        </p>
                      </div>
                    </div>
                    <span className="text-xl text-gray-500">
                      {activeId === cat.id ? "−" : "+"}
                    </span>
                  </div>

                  {activeId === cat.id && (
                    <div className="flex flex-col gap-2 mb-3 text-sm pl-3 border-l border-green-200 text-gray-700">
                      {cat.subCategories.map((sub) => (
                        <Link
                          key={sub.subcat_id}
                          href={`/dua-categories/${sub.subcat_id}`}
                          onClick={() => setIsMobileOpen(false)} // Close on click mobile
                          className="transition-colors line-clamp-1 hover:text-green-600"
                        >
                          ▸ {sub.subcat_name_bn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {filteredCategories.length === 0 && (
                <p className="text-center py-4 text-sm text-gray-400">
                  No categories found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay on mobile when menu open */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-black/50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
