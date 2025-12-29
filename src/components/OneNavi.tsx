"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✨ 핵심: 현재 경로 가져오기
import Modal from "@/components/Modal";

export default function OneNavi() {
  const pathname = usePathname(); // 현재 URL (예: "/one/swi24")
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth >= 768) setIsOpen(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true);
      else setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* 1. 모바일 트리거 버튼 */}
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-md text-gray-700 hover:text-rose-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 2. 배경 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. 사이드바 본체 */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 
          bg-slate-100 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          flex flex-col rounded-r-3xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 pb-2">
          {/* 로고와 서브 문구를 수직으로 정렬하기 위해 flex-col 적용 */}
          <div className="flex flex-col">
            <Link href="/one" className="group flex items-center gap-1">
              <span className="n3 text-2xl font-bold text-rose-400 group-hover:text-rose-500 transition-colors">
                JKAhya
              </span>
              <span className="n3 text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                One
              </span>
            </Link>

            {/* 추가된 서브 문구: From TinyFloor */}
            <span className="text-2xs text-gray-700 n3">From TinyFloor</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-400 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 메뉴 영역 */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
          <div className="n2 text-xs font-semibold text-gray-400 px-2 mb-2 uppercase tracking-wider">
            Services
          </div>
          {/* ✨ active 속성을 제거했습니다. NavItem 내부에서 자동으로 판단합니다. */}
          <NavItem href="#" disabled currentPath={pathname}>
            PassPort
          </NavItem>
          <NavItem href="/one/swi24" currentPath={pathname}>
            SWI EQK 24
          </NavItem>
          <NavItem href="/one/m3u8" currentPath={pathname}>
            M3U8 Player
          </NavItem>
          <NavItem href="/one/webhook" currentPath={pathname}>
            Discord Webhook
          </NavItem>
          <NavItem href="/one/railc" currentPath={pathname}>
            RailWay Stopwatch
          </NavItem>

          <div className="pt-4 border-t border-gray-200 my-2"></div>
          <div className="n2 text-xs font-semibold text-gray-400 px-2 mb-2 uppercase tracking-wider">
            Help
          </div>
          <NavItem href="/one/download" currentPath={pathname}>
            Download
          </NavItem>
          <div className="pt-4 border-t border-gray-200 my-2"></div>
          {/* <div className="text-xs font-semibold text-gray-400 px-2 mb-2 uppercase tracking-wider">
            Account
          </div>
          <NavItem href="/one/profile" currentPath={pathname}>
            Profile
          </NavItem>
          <NavItem href="/one/settings" currentPath={pathname}>
            Settings
          </NavItem> */}
        </div>

        <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2025 TinyFloor
        </div>
      </aside>
    </>
  );
}

// ✨ 업데이트된 NavItem 컴포넌트
function NavItem({
  href,
  children,
  disabled = false,
  currentPath,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  currentPath: string; // 현재 경로를 props로 받음
}) {
  // 현재 경로와 href가 정확히 일치하면 active로 판단
  const isActive = currentPath === href;

  if (disabled) {
    return (
      <div className="flex items-center px-4 py-3 rounded-xl text-gray-300 cursor-not-allowed bg-gray-50/50">
        <span className="n2">{children}</span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`
        n2 flex items-center px-4 py-3 rounded-xl transition-all duration-200
        ${
          isActive
            ? "bg-rose-100 text-rose-600 shadow-sm" // 활성화 스타일
            : "text-gray-600 hover:bg-white hover:shadow-md hover:text-black" // 비활성화 스타일
        }
      `}
    >
      <span className="n2">{children}</span>
    </Link>
  );
}
