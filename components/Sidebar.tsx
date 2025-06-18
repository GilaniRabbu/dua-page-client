"use client";
import {
  Box,
  BookmarkMinus,
  LayoutGrid,
  Hand,
  HandHeart,
  House,
  ClipboardPlus,
} from "lucide-react";
import { useState } from "react";

const icons = [
  { id: 1, label: "Home", icon: <House /> },
  { id: 2, label: "LayoutGrid", icon: <LayoutGrid /> },
  { id: 4, label: "BookmarkMinus", icon: <BookmarkMinus /> },
  { id: 5, label: "ClipboardPlus", icon: <ClipboardPlus /> },
  { id: 6, label: "Box", icon: <Box /> },
];

export default function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-20 lg:flex lg:flex-col lg:justify-between lg:py-4 lg:shadow lg:bg-white">
        {/* Top Icon */}
        <button className="w-12 h-12 mx-auto rounded-xl text-xl flex items-center justify-center cursor-pointer transition-colors text-white bg-green-500 hover:bg-green-600">
          <Hand />
        </button>

        {/* Middle Icons */}
        <div className="flex flex-col gap-4 items-center">
          {icons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
                active === item.id
                  ? "bg-green-100 text-green-600"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
              title={item.label}
            >
              <span className="text-xl">{item.icon}</span>
            </button>
          ))}
        </div>

        {/* Bottom Icon */}
        <button className="w-12 h-12 mx-auto rounded-xl text-xl flex items-center justify-center cursor-pointer transition-colors text-white bg-green-500 hover:bg-green-600">
          <HandHeart />
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full shadow-t py-2 z-30 border-t border-gray-200 bg-white">
        <div className="flex justify-around">
          {icons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`p-2 rounded-full transition-colors ${
                active === item.id
                  ? "bg-green-100 text-green-600"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
