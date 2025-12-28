"use client";

import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    // 배경 그라디언트를 없앤 slate-50 톤 유지
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-3 max-w-5xl mx-auto">
      {/* 세련된 프로그레스 바 스타일의 로더 */}
      {/* 원형 스피너 컨테이너 */}
      <div className="relative w-16 h-16 mb-8">
        {/* 배경 원 (은은한 회색 링) */}
        <div className="absolute inset-0 border-4 border-slate-400 rounded-full" />

        {/* 애니메이션 되는 로즈 컬러 링 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 border-4 border-t-rose-400 border-r-transparent border-b-transparent border-l-transparent rounded-full"
        />
      </div>
      <p className="mt-6 text-lg text-slate-400 n3">Now Loading...</p>
    </div>
  );
}
