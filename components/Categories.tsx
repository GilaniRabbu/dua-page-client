"use client";

import { useState } from "react";
import { useGetCategoriesWithSubCategoriesQuery } from "@/redux/api/categoryApi";

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
  const { data, isLoading, isError } =
    useGetCategoriesWithSubCategoriesQuery(undefined);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  if (isLoading) return <p className="p-6">Loading categories...</p>;
  if (isError)
    return <p className="p-6 text-red-600">Failed to load categories.</p>;

  const categories: Category[] = data?.data || [];

  return (
    <div className="w-full max-w-sm p-6">
      <h2 className="text-2xl mb-4 py-3">Dua Page</h2>

      <div className="rounded-xl shadow-md overflow-hidden">
        <div className="bg-green-500 text-white text-center py-3 text-lg font-semibold rounded-t-xl">
          Categories
        </div>

        <div className="p-4">
          <input
            type="text"
            placeholder="Search by Categories"
            className="w-full px-4 py-2 border rounded-md text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="px-4">
            <div
              onClick={() => toggleAccordion(cat.id)}
              className={`flex items-center justify-between gap-4 p-3 rounded-lg cursor-pointer ${
                activeId === cat.id ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex gap-3 items-start">
                {/* <img
                  src={`/${cat.cat_icon || "default"}.svg`}
                  alt="category"
                  className="w-10 h-10 rounded-lg object-cover"
                /> */}
                <div>
                  <h3 className="font-semibold text-sm text-green-700">
                    {cat.cat_name_en}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Total Subcategories: {cat.subCategories?.length || 0}
                  </p>
                </div>
              </div>

              <span className="text-xl text-gray-500">
                {activeId === cat.id ? "−" : "+"}
              </span>
            </div>

            {activeId === cat.id && (
              <div className="mt-3 mb-4 ml-14 space-y-2 text-sm text-gray-700">
                {cat.subCategories.map((sub) => (
                  <p
                    key={sub.subcat_id}
                    className="hover:text-green-600 transition-colors"
                  >
                    {sub.subcat_name_en}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
