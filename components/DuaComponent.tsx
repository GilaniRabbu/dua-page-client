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
    <div className="w-full max-w-2xl p-6">
      {/* Search Bar */}
      <div className="relative text-right mb-5">
        <input
          type="text"
          placeholder="Search by Dua Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 pr-12 text-gray-600 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600">
          <Search size={20} />
        </button>
      </div>

      {/* Small Card - Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-5">
        <div className="font-medium">
          <span className="text-green-600">Section:</span> {dua.dua_name_en}
        </div>
      </div>

      {/* Large Card - Dua Details */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-green-50 p-4 border-b border-green-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded"></div>
            </div>
            <h2 className="text-green-700 font-semibold text-lg">
              {dua.dua_name_en}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* English Top Explanation */}
          {dua.top_en && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {dua.top_en}
            </div>
          )}

          {/* Arabic Text */}
          {dua.dua_arabic && (
            <div className="text-right py-6">
              <div
                className="text-2xl leading-loose text-gray-800 font-arabic"
                dir="rtl"
              >
                {dua.dua_arabic}
              </div>
            </div>
          )}

          {/* Transliteration */}
          {dua.transliteration_en && (
            <div className="space-y-2">
              <div className="font-semibold text-gray-800">
                Transliteration:
              </div>
              <div className="text-gray-700 italic leading-relaxed">
                {dua.transliteration_en}
              </div>
            </div>
          )}

          {/* Translation */}
          {dua.translation_en && (
            <div className="space-y-2">
              <div className="font-semibold text-gray-800">Translation:</div>
              <div className="text-gray-700 leading-relaxed">
                {dua.translation_en}
              </div>
            </div>
          )}

          {/* Bottom Explanation */}
          {dua.bottom_en && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {dua.bottom_en}
            </div>
          )}

          {/* Reference */}
          {dua.refference_en && (
            <div className="space-y-2">
              <div className="font-semibold text-green-600">Reference:</div>
              <div className="text-gray-700">{dua.refference_en}</div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors">
              <Play size={20} fill="currentColor" />
            </button>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Copy size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Bookmark size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Lightbulb size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Clock size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
