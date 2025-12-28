"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface DownloadCardProps {
  title: string; // 제목
  location: string; // 다운로드 받는 위치 (예: GitHub, Official Server 등)
  downloadUrl: string; // 이동될 링크
  children: ReactNode; // 설명 (children)
}

export default function DownloadCard({
  title,
  location,
  downloadUrl,
  children,
}: DownloadCardProps) {
  return (
    <section className="w-full mt-6 bg-slate-100 rounded-3xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-white/50">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* 1. 정보 영역 (제목 & 위치) */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                {location}
              </span>
            </div>
            <h3 className="n3 text-2xl font-bold text-slate-800 mb-3">
              {title}
            </h3>

            {/* 2. 설명 영역 (children) */}
            <div className="n2 text-slate-600 leading-relaxed text-sm md:text-base opacity-90">
              {children}
            </div>
          </div>

          {/* 3. 액션 영역 (다운로드 버튼) */}
          <div className="flex flex-col items-center gap-2">
            <Link
              href={downloadUrl}
              target="_blank" // 외부 링크일 가능성이 높으므로 새 창 열기 권장
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl shadow-md transition-all hover:bg-rose-400 hover:text-white active:scale-95 min-w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3"
                />
              </svg>
              <span>다운로드</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
