"use client";

import {
  BookOpen,
  Bookmark,
  Grid2x2,
  Hand,
  HandHeart,
  House,
  Lightbulb,
  MessageCircleMore,
  PillBottle,
} from "lucide-react";
import { useState } from "react";

const icons = [
  { id: 1, label: "Home", icon: <House /> },
  { id: 2, label: "Grid", icon: <Grid2x2 /> },
  { id: 3, label: "Idea", icon: <Lightbulb /> },
  { id: 4, label: "Bookmark", icon: <Bookmark /> },
  { id: 5, label: "Bottle", icon: <PillBottle /> },
  { id: 6, label: "Chat", icon: <MessageCircleMore /> },
  { id: 7, label: "Book", icon: <BookOpen /> },
];

export default function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col justify-between py-4 shadow bg-white">
      {/* Top Icon */}
      <button className="w-12 h-12 mx-auto rounded-xl text-xl flex items-center justify-center text-white bg-green-500 hover:bg-green-600">
        <Hand />
      </button>

      {/* Middle Icons */}
      <div className="flex flex-col gap-4 items-center">
        {icons.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              active === item.id
                ? "bg-gray-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            title={item.label}
          >
            <span className="text-xl">{item.icon}</span>
          </button>
        ))}
      </div>

      {/* Bottom Icon */}
      <button className="w-12 h-12 mx-auto rounded-xl text-xl flex items-center justify-center text-white bg-green-500 hover:bg-green-600">
        <HandHeart />
      </button>
    </div>
  );
}
