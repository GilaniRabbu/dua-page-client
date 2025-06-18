"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Languages,
  Printer,
  LayoutGrid,
  Palette,
} from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedSetting, setSelectedSetting] = useState("appearance");

  const settingsItems = [
    {
      id: "language",
      icon: Languages,
      label: "Language Settings",
    },
    {
      id: "general",
      icon: Printer,
      label: "General Settings",
    },
    {
      id: "font",
      icon: LayoutGrid,
      label: "Font Settings",
    },
    {
      id: "appearance",
      icon: Palette,
      label: "Appearance Settings",
    },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="hidden md:fixed top-4 right-4 inline-block text-left z-50"
      ref={dropdownRef}
    >
      {/* Trigger button */}
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 group-hover:brightness-95 transition">
          <Image
            src="/globe.svg"
            alt="Settings"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-5 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl animate-fade-in">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-center text-gray-800 mb-5">
              Settings
            </h1>

            <div className="space-y-3">
              {settingsItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedSetting === item.id;

                return (
                  <div key={item.id} className="relative">
                    {/* Left Active Indicator */}
                    {isSelected && (
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-green-500 rounded-r z-10" />
                    )}
                    <button
                      onClick={() => setSelectedSetting(item.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-md transition-colors duration-150 text-sm font-medium
                        ${
                          isSelected
                            ? "bg-blue-500 text-green-600"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
