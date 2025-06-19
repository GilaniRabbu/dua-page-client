"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Play,
  Copy,
  Bookmark,
  Lightbulb,
  Share2,
  Clock,
} from "lucide-react";
import { useGetSingleDuaQuery } from "@/redux/api/duaApi";
import Loader from "@/components/shared/Loader";

export default function DuaComponent({ id }: { id: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useGetSingleDuaQuery(id);

  const dua = data?.data;

  if (isLoading) return <Loader />;
  if (isError || !dua)
    return <p className="p-6 text-red-600">Failed to load dua.</p>;

  return (
    <div className="w-full xl:max-w-2xl lg:max-w-3xl mx-auto p-4 mb-20 lg:mb-0">
      {/* Search */}
      <div className="relative mb-4 text-right">
        <input
          type="text"
          placeholder="Search by Dua Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm px-4 py-3 pr-12 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
          <Search size={20} />
        </button>
      </div>

      {/* Section Name */}
      <div className="p-4 mb-4 rounded-lg border border-gray-200 bg-white">
        <span className="font-semibold text-green-600">Section:</span>{" "}
        <span className="font-medium text-gray-800">{dua.dua_name_en}</span>
      </div>

      {/* Main Dua Card */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {/* Header */}
        <div className="p-4 border-b border-green-100 bg-green-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <Image
                src="/icon.svg"
                alt="Icon"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-base lg:text-lg text-green-700">
              {dua.dua_name_en}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm lg:text-base">
          {/* Top Explanation */}
          {!!dua.top_en && (
            <p className="whitespace-pre-line text-gray-700">{dua.top_en}</p>
          )}

          {/* Arabic */}
          {!!dua.dua_arabic && (
            <div
              dir="rtl"
              className="text-2xl font-arabic text-right leading-loose text-gray-900"
            >
              {dua.dua_arabic}
            </div>
          )}

          {/* Transliteration */}
          {!!dua.transliteration_en && (
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-800">Transliteration:</h4>
              <p className="italic text-gray-700">{dua.transliteration_en}</p>
            </div>
          )}

          {/* Translation */}
          {!!dua.translation_en && (
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-800">Translation:</h4>
              <p className="text-gray-700">{dua.translation_en}</p>
            </div>
          )}

          {/* Bottom Explanation */}
          {!!dua.bottom_en && (
            <p className="whitespace-pre-line text-gray-700">{dua.bottom_en}</p>
          )}

          {/* Reference */}
          {!!dua.refference_en && (
            <div className="space-y-1">
              <h4 className="font-semibold text-green-600">Reference:</h4>
              <p className="text-gray-700">{dua.refference_en}</p>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="p-4 flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between border-t border-gray-200">
          {/* Audio Button */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-green-600 hover:bg-green-700">
            <Play size={20} fill="currentColor" />
          </button>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap text-gray-500">
            {[Copy, Bookmark, Lightbulb, Share2, Clock].map((Icon, idx) => (
              <button
                key={idx}
                className="p-2 transition-colors hover:text-gray-700"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
