import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { CollabBeam } from "@/components/collab-beam";
import { cn } from "@/lib/utils";

const EMAIL = "lsseys1991@gmail.com";

const projects = [
  {
    title: "회원 76,255명, 링크로 만든 예약 2,944만 원",
    meta: "중여커 커뮤니티 · 2024.11 – 현재",
    body: "중국 무비자 시행 18일 만에 커뮤니티를 제안하고 이름을 지어 런칭했습니다. 회원들이 자주 묻는 질문에 예약 링크를 붙여, 광고비 없이 트립닷컴 예약 83건을 만들었습니다.",
    tags: ["네이밍", "커뮤니티", "전환 콘텐츠"],
    img: "/jyk-main2.png",
    detail: "중여커 커뮤니티 상세.dc.html",
  },
  {
    title: "제목 하나로 조회수 3배",
    meta: "네이버 메인 중국 주제판 · 2017 – 2022",
    body: "네이버 메인 중국 주제판의 편성과 헤드라인을 약 3년간 맡았습니다. 23자 제목과 썸네일로 A/B 테스트를 500건 넘게 하며 월 UB를 18만에서 23만으로 올렸습니다.",
    tags: ["헤드라인", "A/B 검증", "데이터"],
    img: "/naver-china-panel.png",
    detail: "네이버 주제판 편성 상세.dc.html",
  },
  {
    title: "중국어 몰라도 쓰는 중국 여행 지도",
    meta: "중여커 지도 · 2026 런칭",
    body: "커뮤니티에서 자주 나온 질문을 하나씩 지도 기능으로 만들었습니다. 분류와 표기 기준을 직접 세웠고, 3개월 동안 순방문자 11,000명이 찾았습니다.",
    tags: ["서비스 기획", "카테고리 분류", "표기 기준"],
    img: "/jyk-map.png",
    detail: "중여커 지도 상세.dc.html",
  },
  {
    title: "첫 문장 하나로 51만 뷰",
    meta: "카드뉴스 · Our History · 14건 406만 읽음",
    body: "중앙일보 'Our History' 카드뉴스를 발제부터 제목·본문까지 직접 구성했습니다. 14건 합계 406만 명이 읽었고, 플랫폼마다 맞게 다시 써서 발행했습니다.",
    tags: ["카드뉴스", "첫 문장", "숏폼 비주얼"],
    img: "/oh-cover1.jpg",
    detail: "카드뉴스 상세.dc.html",
  },
  {
    title: "자동화로 제작 시간 60% 단축, 4년 연속 납품",
    meta: "네이버 콘텐츠 프로젝트 · 연 1만 건 이상",
    body: "네이버 지식백과·어학사전에 들어갈 콘텐츠를 해마다 1만 건 넘게 만들어 납품했습니다. 제작 공정을 새로 짜고 자동화해 작업 시간을 60% 줄였습니다.",
    tags: ["대량 제작 공정", "자동화", "검수"],
    img: "/naver-dict2.jpg",
    detail: "네이버 콘텐츠 프로젝트 상세.dc.html",
  },
  {
    title: "유료 구독으로 팔린 기획 시리즈",
    meta: "차이나랩 · 2017 – 2022",
    body: "차이나랩 에디터로 3년간 매주 2건 이상 완결된 글을 썼습니다. 직접 기획하고 이름 붙인 '대륙의 신기업 열전'은 유료 구독 콘텐츠로 판매됐습니다.",
    tags: ["기사 작성", "시리즈 기획", "유료 구독"],
    img: "/uc3.png",
    detail: "기사 아카이브 상세.dc.html",
  },
];

const abilities = [
  {
    title: "고객 관점 카피",
    body: "23자 제목과 썸네일로 A/B 테스트를 500건 넘게 했습니다. 추상적인 비유를 구체적인 장면으로 바꿔, 같은 본문의 조회수를 3배로 올렸습니다.",
  },
  {
    title: "콘텐츠로 만든 전환",
    body: "광고비 없이 콘텐츠 속 링크만으로 클릭 3,138회, 예약 83건(CVR 2.64%), 트립닷컴 예약액 US$22,199.43(약 2,944만 원)을 만들었습니다.",
  },
  {
    title: "AI 활용과 제작 효율화",
    body: "Claude Code로 커뮤니티 질문글의 키워드를 뽑아 기획에 쓰고, 질문과 댓글을 AI로 다시 엮어 콘텐츠로 발행합니다. 2023년에는 업무 자동화로 작업 시간을 60% 줄였습니다.",
  },
  {
    title: "데이터 기반 개선",
    body: "PV·UB·CTR·CVR과 유입 키워드 로그, 이용자 479명의 의견을 보고 회원이 빠져나가는 지점을 찾아 콘텐츠와 기능을 고쳤습니다.",
  },
  {
    title: "여러 직군과 협업",
    body: "기업·도시·음식·여행처럼 처음 다루는 주제도 매주 결과물로 냈습니다. 디자이너·개발자·외부 필진 30여 명, 제휴사와 일하며 5인 이상 팀을 이끌었습니다.",
  },
];

const skills = [
  "고객 관점 카피",
  "헤드라인 A/B 테스트 500건+",
  "콘텐츠 기획·편집",
  "커뮤니티 네이밍·런칭",
  "데이터 기반 개선",
  "AI 콘텐츠 제작",
  "Claude Code",
  "대량 콘텐츠 디렉팅",
  "서비스 기획",
  "카드뉴스",
];

const career = [
  {
    period: "2015 – 2017",
    org: "중앙일보",
    roles: ["창간 50주년 TF팀 인턴", "모바일서비스팀 사원"],
    note: "'Our History' 카드뉴스 기획·제작 · 단일 최고 51.7만 읽음",
  },
  {
    period: "2017 – 2022",
    org: "차이나랩",
    sub: "중앙일보·네이버 JV",
    roles: ["에디터", "CP"],
    note: "네이버 메인 중국 주제판 편성 · 헤드라인 A/B 테스트 500건+ · 월 UB 18만 → 23만",
  },
  {
    period: "2023 – 현재",
    org: "차이나랩",
    roles: ["뉴스제작팀장", "프로젝트 총괄", "서비스 기획", "브랜딩"],
    note: "중여커 네이밍·런칭·운영(회원 76,255명) · 네이버 콘텐츠 프로젝트 4년 연속 납품 · 업무 자동화로 제작 시간 60% 단축",
    now: true,
  },
];

function SectionLabel({ en, ko }: { en: string; ko: string }) {
  return (
    <BlurFade inView className="mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--pf-accent)]">
        {en}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {ko}
      </h2>
    </BlurFade>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--pf-divider)]/60 bg-[var(--pf-bg)]/80 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-semibold">
            임서영
          </a>
          <div className="flex items-center gap-5 text-sm text-[var(--pf-muted)]">
            <a href="#results" className="hidden hover:text-[var(--pf-text)] sm:inline">성과</a>
            <a href="#work" className="hidden hover:text-[var(--pf-text)] sm:inline">주요 프로젝트</a>
            <a href="#can" className="hidden hover:text-[var(--pf-text)] sm:inline">할 수 있는 일</a>
            <a href="#career" className="hidden hover:text-[var(--pf-text)] sm:inline">경력</a>
            <a href={`mailto:${EMAIL}`} className="font-medium text-[var(--pf-accent)]">이메일</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] items-center pt-14">
        <DotPattern
          glow
          className="text-[var(--pf-accent)]/40 [mask-image:radial-gradient(520px_circle_at_center,white,transparent)]"
        />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <BlurFade delay={0.05}>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--pf-accent)]">
              <span>Content Editor ×</span>
              <WordRotate
                words={["Copywriter", "Community Builder", "Service Planner"]}
                className="text-sm font-medium text-[var(--pf-accent)]"
              />
            </div>
          </BlurFade>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            once
            className="mt-6 text-4xl leading-[1.25] font-bold tracking-tight sm:text-6xl"
          >
            제목 하나로 조회수 3배.
          </TextAnimate>
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.4}
            once
            className="text-4xl leading-[1.25] font-bold tracking-tight text-[var(--pf-accent)] sm:text-6xl"
          >
            콘텐츠 속 링크로 예약 2,944만 원.
          </TextAnimate>
          <BlurFade delay={0.9}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              콘텐츠 에디터 임서영입니다. 기사, 카드뉴스, 커뮤니티, 지도 서비스를
              기획하고 직접 썼습니다.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--pf-muted)]">
              10년 6개월 · 중앙일보·네이버 JV 차이나랩 뉴스제작팀장 · 지금은 Claude
              Code로 고객 질문을 분석해 기획합니다
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work">
                <ShimmerButton background="#796cbf" shimmerColor="#ffffff" className="px-6 py-3 text-sm font-semibold">
                  주요 프로젝트 보기
                </ShimmerButton>
              </a>
              <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-[var(--pf-accent)] hover:underline">
                {EMAIL}
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="border-y border-[var(--pf-divider)] bg-[var(--pf-surface)] py-4">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:2.5rem]">
          {skills.map((s) => (
            <span key={s} className="flex items-center gap-10 text-sm font-medium text-[var(--pf-muted)]">
              {s}
              <span className="text-[var(--pf-accent)]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Results */}
      <section id="results" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionLabel en="RESULTS" ko="숫자로 남은 성과" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              value: <><span className="text-[var(--pf-muted)] text-2xl mr-1">PV</span><NumberTicker value={3} className="text-[var(--pf-text)]" />배</>,
              desc: "본문은 그대로, 제목만 바꿔서 (A/B 테스트 500건+)",
            },
            {
              value: <><span className="text-[var(--pf-muted)] text-2xl mr-1">US$</span><NumberTicker value={22199.43} decimalPlaces={2} className="text-[var(--pf-text)]" /></>,
              desc: "광고 없이 콘텐츠 속 링크로 만든 트립닷컴 예약액 (약 2,944만 원)",
            },
            {
              value: <><NumberTicker value={76255} className="text-[var(--pf-text)]" />명</>,
              desc: "직접 이름 짓고 런칭한 커뮤니티 회원 (2026년 10월 기준)",
            },
          ].map((s, i) => (
            <BlurFade key={i} inView delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--pf-divider)] bg-[var(--pf-surface)] p-7">
                <div className="text-3xl font-bold tracking-tight tabular-nums whitespace-nowrap lg:text-4xl">
                  {s.value}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--pf-muted)]">{s.desc}</p>
                <BorderBeam size={70} duration={8} delay={i * 2} colorFrom="#796cbf" colorTo="#c4b8ff" />
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionLabel en="WHAT I DID" ko="본인 기여도 80% 이상인 대표 프로젝트 6건" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <BlurFade key={p.title} inView delay={(i % 2) * 0.1}>
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="#e6e2f7"
                gradientFrom="#796cbf"
                gradientTo="#c4b8ff"
              >
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-[var(--pf-accent-soft)]">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--pf-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-[var(--pf-muted)]">{p.meta}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--pf-muted)]">{p.body}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-[var(--pf-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--pf-accent)]">
                          {t}
                        </span>
                      ))}
                      <a
                        href={`/${encodeURIComponent(p.detail)}`}
                        className="ml-auto text-sm font-medium text-[var(--pf-accent)] hover:underline"
                      >
                        상세 보기 →
                      </a>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Can */}
      <section id="can" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionLabel en="WHAT I CAN" ko="해 온 일을 다섯 가지로 정리했습니다" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {abilities.map((a, i) => (
            <BlurFade key={a.title} inView delay={i * 0.06} className={cn(i === 4 && "lg:col-span-1")}>
              <MagicCard className="h-full rounded-2xl" gradientColor="#e6e2f7" gradientFrom="#796cbf" gradientTo="#c4b8ff">
                <div className="p-6">
                  <span className="text-sm font-semibold text-[var(--pf-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-bold">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--pf-muted)]">{a.body}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
        <BlurFade inView className="mt-12">
          <CollabBeam />
          <p className="mt-4 text-center text-sm text-[var(--pf-muted)]">
            콘텐츠 팀 리더로 여러 직군과 함께 프로젝트를 이끌었습니다
          </p>
        </BlurFade>
      </section>

      {/* Career */}
      <section id="career" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionLabel en="CAREER" ko="경력 · 2015 — 현재" />
        <ol className="relative border-l border-[var(--pf-divider)] pl-8">
          {career.map((c, i) => (
            <BlurFade key={c.period} inView delay={i * 0.1} className="pb-12 last:pb-0">
              <li className="relative">
                <span className="absolute top-1.5 -left-[39px] flex size-3.5 items-center justify-center">
                  {c.now && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--pf-accent)] opacity-50" />
                  )}
                  <span className="relative size-3.5 rounded-full border-2 border-[var(--pf-bg)] bg-[var(--pf-accent)]" />
                </span>
                <p className="text-sm font-medium text-[var(--pf-muted)]">
                  {c.period}
                  {c.now && (
                    <span className="ml-2 rounded-full bg-[var(--pf-accent)] px-2 py-0.5 text-[10px] font-bold text-white">NOW</span>
                  )}
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  {c.org}
                  {c.sub && <span className="ml-2 text-sm font-normal text-[var(--pf-muted)]">{c.sub}</span>}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.roles.map((r) => (
                    <span key={r} className="rounded-md border border-[var(--pf-divider)] bg-[var(--pf-surface)] px-2 py-0.5 text-xs">
                      {r}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--pf-muted)]">{c.note}</p>
              </li>
            </BlurFade>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <footer className="relative overflow-hidden border-t border-[var(--pf-divider)] bg-[var(--pf-surface)]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--pf-accent)]">CONTACT</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">연락처</h2>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-block">
            <ShimmerButton background="#796cbf" className="px-8 py-3.5 text-base font-semibold">
              {EMAIL}
            </ShimmerButton>
          </a>
          <p className="mt-4 text-sm text-[var(--pf-muted)]">010-9299-4971</p>
          <p className="mt-16 text-xs text-[var(--pf-muted)]">
            © 임서영. All rights reserved. Content Editor &amp; Copywriter
          </p>
        </div>
      </footer>
    </main>
  );
}
