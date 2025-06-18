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
      className="hidden md:fixed top-4 right-4 inline-block text-left"
      ref={dropdownRef}
    >
      {/* Trigger section */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
          <Image
            src="/globe.svg" // You can replace this with user's profile img
            alt="Profile"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-4 w-80 bg-white border border-gray-200 rounded-3xl shadow z-50">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              Settings
            </h1>

            <div className="space-y-4">
              {settingsItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedSetting === item.id;

                return (
                  <div key={item.id} className="relative">
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 rounded-r-sm z-10" />
                    )}
                    <button
                      onClick={() => setSelectedSetting(item.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
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
