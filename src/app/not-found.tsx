"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // ✨ 배경 그라디언트 제거 및 전체 배경색 통일
    <div className="flex flex-col items-center justify-center py-12">
      {/* ✨ 요청하신 레이아웃 가이드라인 적용 */}
      <div className="w-full px-3 max-w-5xl mx-auto flex justify-center">
        <section className="text-center p-10 md:p-16 rounded-[2.5rem] shadow-sm w-full max-w-2xl">
          {/* 브랜드 로고 영역 */}
          <Link
            href="/one"
            className="inline-flex items-center gap-1 mb-10 group"
          >
            <span className="n3 text-3xl font-bold text-rose-400 group-hover:text-rose-500 transition-colors">
              JKAhya
            </span>
            <span className="n3 text-3xl font-bold text-black group-hover:text-gray-700 transition-colors">
              One
            </span>
          </Link>

          {/* 에러 아이콘 - 고대비 포인트 */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-rose-50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-rose-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>

          <h1 className="n3 text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
            페이지를 찾을 수 없어요.
          </h1>
          <p className="n2 text-lg text-slate-500 leading-relaxed mb-10 max-w-md mx-auto">
            요청하신 페이지는 존재하지 않거나,
            <br />
            이동된것 같아요.
            <br />
            주소를 다시 한 번 확인해 주세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/one"
              className="px-10 py-4 bg-white text-slate-600 hover:text-slate-900 font-bold rounded-2xl shadow-sm border border-slate-200 transition-all hover:bg-slate-50 active:scale-95"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
