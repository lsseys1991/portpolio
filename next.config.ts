import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 기존 정적 사이트의 홈 주소를 새 홈으로 연결
  // (상세 페이지의 '임서영 포트폴리오 v2.dc.html' 링크는 public/ 안의 안내 페이지가 처리)
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
