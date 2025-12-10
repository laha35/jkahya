import type { NextConfig } from "next";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public", // 서비스 워커 파일이 생성될 위치
  cacheOnFrontEndNav: true, // 프론트엔드 네비게이션 시 캐싱 활성화
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true, // 온라인 상태가 되면 새로고침
  swcMinify: true,
  //disable: process.env.NODE_ENV === "development", // 개발 모드에서는 PWA 비활성화 (권장)
  // workboxOptions: { ... } // 필요 시 워크박스 상세 설정
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = withPWA(nextConfig);
