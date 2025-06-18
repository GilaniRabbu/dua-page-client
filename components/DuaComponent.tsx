"use client";
import { useState } from "react";
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

export default function DuaComponent({ id }: { id: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, isError } = useGetSingleDuaQuery(id);

  const dua = data?.data;

  if (isLoading) return <p className="p-6">Loading dua...</p>;
  if (isError || !dua)
    return <p className="p-6 text-red-600">Failed to load dua.</p>;

  return (
    <div className="w-full lg:max-w-3xl mx-auto p-4 mb-20 lg:mb-0">
      {/* Search */}
      <div className="relative mb-4 text-right">
        <input
          type="text"
          placeholder="Search by Dua Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm px-4 py-3 pr-12 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
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
        <div className="bg-green-50 border-b border-green-100 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-green-700 font-semibold text-base lg:text-lg">
              {dua.dua_name_en}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm lg:text-base">
          {/* Top Explanation */}
          {!!dua.top_en && (
            <p className="text-gray-700 whitespace-pre-line">{dua.top_en}</p>
          )}

          {/* Arabic */}
          {!!dua.dua_arabic && (
            <div
              dir="rtl"
              className="text-2xl font-arabic text-right text-gray-900 leading-loose"
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
            <p className="text-gray-700 whitespace-pre-line">{dua.bottom_en}</p>
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
        <div className="border-t border-gray-200 p-4 flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
          {/* Audio Button */}
          <button className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center">
            <Play size={20} fill="currentColor" />
          </button>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap text-gray-500">
            {[Copy, Bookmark, Lightbulb, Share2, Clock].map((Icon, idx) => (
              <button
                key={idx}
                className="p-2 hover:text-gray-700 transition-colors"
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
