"use client";

import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Introduction to Dua",
    subcategory: 11,
    count: 15,
    items: [
      "What is Dua",
      "Conditions for Dua to be successful",
      "The Methode Of Dua",
      "Before Dua",
      "During Dua",
      "Prerequisites of writing Dua and drinking it’s water",
      "The correct way to perform Dua for a small child",
    ],
  },
  {
    id: 2,
    title: "Benefits of Dua",
    subcategory: 5,
    count: 12,
    items: [
      "Dua brings peace",
      "It connects us with Allah",
      "It relieves distress",
      "Increases faith",
    ],
  },
  {
    id: 3,
    title: "When to Make Dua",
    subcategory: 6,
    count: 8,
    items: ["Before sleeping", "After Salah", "In Sujood", "On Fridays"],
  },
  {
    id: 4,
    title: "When to Make Dua",
    subcategory: 6,
    count: 8,
    items: ["Before sleeping", "After Salah", "In Sujood", "On Fridays"],
  },
];

export default function Categories() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-sm p-6">
      <h2 className="text-2xl mb-4 py-3">Dua Page</h2>

      <div className="rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 text-white text-center py-3 text-lg font-semibold rounded-t-xl">
          Categories
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search by Categories"
            className="w-full px-4 py-2 border rounded-md text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Accordion Categories */}
        {categories.map((cat) => (
          <div key={cat.id} className="px-4">
            <div
              onClick={() => toggleAccordion(cat.id)}
              className={`flex items-center justify-between gap-4 p-3 rounded-lg cursor-pointer ${
                activeId === cat.id ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex gap-3 items-start">
                <img
                  src="/window.svg"
                  alt="category"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm text-green-700">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    Subcategory: {cat.subcategory} | {cat.count} Duas
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Content */}
            {activeId === cat.id && (
              <div className="mt-3 mb-4 ml-14 space-y-2 text-sm text-gray-700">
                {cat.items.map((item, index) => (
                  <p
                    key={index}
                    className={`${
                      index === 0 ? "text-green-600 font-semibold" : ""
                    }`}
                  >
                    {item}
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
