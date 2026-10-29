"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

function Node({
  label,
  className,
  ref,
}: {
  label: string;
  className?: string;
  ref: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-11 items-center justify-center rounded-full border border-[var(--pf-divider)] bg-[var(--pf-surface)] px-4 text-sm font-medium whitespace-nowrap shadow-[0_0_20px_-12px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {label}
    </div>
  );
}

const left = ["기획자", "디자이너", "개발자"];
const right = ["외부필진", "비즈니스", "플랫폼사(네이버)"];

export function CollabBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const leftRefs = [l0, l1, l2];
  const rightRefs = [r0, r1, r2];

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--pf-divider)] bg-[var(--pf-surface)] p-6 sm:p-10"
    >
      <div className="flex flex-col gap-6">
        {left.map((l, i) => (
          <Node key={l} label={l} ref={leftRefs[i]} />
        ))}
      </div>
      <div
        ref={centerRef}
        className="z-10 flex size-24 shrink-0 flex-col items-center justify-center rounded-full bg-[var(--pf-accent)] text-center text-xs leading-tight font-semibold text-white shadow-lg sm:size-28 sm:text-sm"
      >
        콘텐츠
        <br />팀 리더
      </div>
      <div className="flex flex-col items-end gap-6">
        {right.map((l, i) => (
          <Node key={l} label={l} ref={rightRefs[i]} />
        ))}
      </div>
      {leftRefs.map((r, i) => (
        <AnimatedBeam
          key={`l${i}`}
          containerRef={containerRef}
          fromRef={r}
          toRef={centerRef}
          curvature={(i - 1) * -40}
          gradientStartColor="#796cbf"
          gradientStopColor="#b8a9ff"
          delay={i * 0.4}
        />
      ))}
      {rightRefs.map((r, i) => (
        <AnimatedBeam
          key={`r${i}`}
          containerRef={containerRef}
          fromRef={r}
          toRef={centerRef}
          curvature={(i - 1) * -40}
          reverse
          gradientStartColor="#796cbf"
          gradientStopColor="#b8a9ff"
          delay={i * 0.4 + 0.2}
        />
      ))}
    </div>
  );
}
