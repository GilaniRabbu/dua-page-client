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

export default function DuaComponent({ id }: { id: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(id);
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
          <span className="text-green-600">Section:</span> The servant is
          dependent on his Lord
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
              2. Conditions for Dua to be successful
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* English Text */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              Prophet (ﷺ) used to say after every compulsory prayer, The servant
              will ask his Lord for all of his religiously and worldly needs,
              because the treasure of all things is in the hands of Allah. Allah
              says (interpretation of the meaning): &quot;And there is not a
              thing but that with Us are its depositories, and We do not send it
              down except according to a known measure.&quot; (Sura Al-Hijr
              15:21) No one can withhold what Allah gives; And, no one can give
              what he resists.
            </p>
          </div>

          {/* Arabic Text */}
          <div className="text-right py-6">
            <div
              className="text-2xl leading-loose text-gray-800 font-arabic"
              dir="rtl"
            >
              لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ
              الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ،
              اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا
            </div>
            <div
              className="text-2xl leading-loose text-gray-800 font-arabic mt-4"
              dir="rtl"
            >
              مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ
              الْجَدُّ
            </div>
          </div>

          {/* Transliteration */}
          <div className="space-y-2">
            <div className="font-semibold text-gray-800">Transliteration:</div>
            <div className="text-gray-700 italic leading-relaxed">
              Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
              lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir.
              Allaahumma laa maani&apos;a limaa a&apos;taita wa laa mu&apos;tia
              limaa mana&apos;ta wa laa yanfa&apos;u dhal-jaddi minka al-jaddu
            </div>
          </div>

          {/* Translation */}
          <div className="space-y-2">
            <div className="font-semibold text-gray-800">Translation:</div>
            <div className="text-gray-700 leading-relaxed">
              There is none worthy of worship except Allah alone with no partner
              or associate. He is the Dominion and to Him be all praise, and He
              is able to do all things. O Allah, one can withhold what You have
              given and none can give what You have withheld, and no wealth or
              fortune can benefit anyone for from You comes all wealth and
              fortune.
            </div>
          </div>

          {/* Reference */}
          <div className="space-y-2">
            <div className="font-semibold text-green-600">Reference:</div>
            <div className="text-gray-700">Bukhari: 844</div>
          </div>
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
