"use client";

import { useState } from "react";
import Title from "@/components/Title"; // 기존 Title 컴포넌트 활용
import M3u8Player from "@/components/M3u8Player"; // 기존 Player 컴포넌트

export default function M3u8Page() {
  // 1. 입력창의 텍스트를 담는 상태
  const [inputUrl, setInputUrl] = useState("");
  // 2. 실제 플레이어에 전달할 재생 URL 상태
  const [videoSrc, setVideoSrc] = useState("");

  // 재생 버튼 클릭 핸들러
  const handlePlay = () => {
    if (!inputUrl.trim()) {
      alert("M3U8 URL을 입력해주세요.");
      return;
    }
    setVideoSrc(inputUrl);
  };

  // 엔터 키 입력 핸들러
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePlay();
    }
  };

  return (
    <div className="w-full px-3 max-w-5xl mx-auto">
      <Title title="M3U8 Player" lore="Easy M3U8 Player" />

      {/* 입력 폼 영역 */}
      <section className="mt-6 mb-8 p-6 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="https://example.com/playlist.m3u8"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-5 py-3 rounded-2xl bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all text-slate-700"
          />
          <button
            onClick={handlePlay}
            className="px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-bold rounded-2xl shadow-lg shadow-rose-200 transition-all active:scale-95 whitespace-nowrap"
          >
            재생하기
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-3 ml-2">
          * .m3u8 확장자로 끝나는 스트리밍 주소를 입력하세요.
        </p>
      </section>

      {/* 플레이어 영역 */}
      <div className="overflow-hidden rounded-3xl shadow-2xl bg-black aspect-video flex items-center justify-center">
        {videoSrc ? (
          <M3u8Player src={videoSrc} autoplay={true} />
        ) : (
          <div className="text-slate-500 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto mb-2 opacity-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            <p className="n2">재생할 URL을 입력하고 버튼을 눌러주세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
