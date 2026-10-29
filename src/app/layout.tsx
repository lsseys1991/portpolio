import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "임서영 포트폴리오",
  description:
    "콘텐츠 에디터 임서영. 제목 하나로 조회수 3배, 콘텐츠 속 링크로 예약 2,944만 원.",
  metadataBase: new URL("https://limseoyoung.vercel.app"),
  openGraph: { images: ["/og-cover.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
