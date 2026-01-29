import { useMemo, useState } from "react";
import { Trouble } from "./projectData";


export default function TroubleCarousel({ troubles }: { troubles: Trouble[] }) {
    const [idx, setIdx] = useState(0);
    const total = troubles.length;

    const canNav = total > 1;
    const t = troubles[idx];

    const goPrev = () => setIdx((v) => (v - 1 + total) % total);
    const goNext = () => setIdx((v) => (v + 1) % total);

    const title = useMemo(() => `(${idx + 1}/${total})`, [idx, total]);

    return (
        <div className="mt-3">
            {/* 상단 헤더: 제목 + 좌우 버튼 */}
            <div className="flex items-center justify-between gap-3">
                <div className="text-xl font-bold text-white">
                    트러블슈팅 {title}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={goPrev}
                        disabled={!canNav}
                        className="
                            h-9 w-9 rounded-xl
                            border border-border bg-white/5
                            text-text
                            transition
                            hover:border-accent/40
                            disabled:opacity-40 disabled:cursor-default
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                        "
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        disabled={!canNav}
                        className="
                            h-9 w-9 rounded-xl
                            border border-border bg-white/5
                            text-text
                            transition
                            hover:border-accent/40
                            disabled:opacity-40 disabled:cursor-default
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60
                        "
                    >
                        →
                    </button>
                </div>
            </div>

            {/* 본문 카드 */}
            <div
                className="
                    mt-3 rounded-2xl border border-border bg-white/5
                    p-4
                    shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                    "
            >
                <TroubleRow label="문제" value={t.problem} />
                <Divider />
                <TroubleRow label="고민" value={t.cause} />
                <Divider />
                <TroubleRow label="해결" value={t.solution} />
            </div>

            {/* 점 인디케이터 */}
            <div className="mt-3 flex items-center justify-center gap-2">
                {troubles.map((_, i) => {
                    const on = i === idx;
                    return (
                        <button
                            key={i}
                            type="button"
                            aria-label={`트러블슈팅 ${i + 1}`}
                            onClick={() => setIdx(i)}
                            className={[
                                "h-2 rounded-full transition-all duration-200",
                                on ? "w-8 bg-accent" : "w-2 bg-border/70",
                            ].join(" ")}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function TroubleRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="grid grid-cols-[64px_1fr] gap-3 items-start">
            <div className="text-[12px] font-extrabold text-accent">{label}</div>
            <div className="text-[14px] leading-[1.7] text-muted whitespace-pre-line">
                {value}
            </div>
        </div>
    );
}

function Divider() {
    return <div className="my-3 h-px bg-border" />;
}
