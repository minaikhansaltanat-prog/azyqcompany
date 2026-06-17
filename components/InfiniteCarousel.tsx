'use client';

import { useLayoutEffect, useRef } from 'react';

type InfiniteCarouselProps = {
  items: React.ReactNode[];
  cardWidth?: string;
  gap?: number;
};

export function InfiniteCarousel({ items, cardWidth = 'min(320px, 82vw)', gap = 20 }: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const movingRef = useRef(false);
  const cardWRef = useRef(340);
  const N = items.length;

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || N === 0) return;
    const firstCard = track.children[0] as HTMLElement | undefined;
    if (firstCard) cardWRef.current = firstCard.offsetWidth + gap;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${N * cardWRef.current}px)`;
    idxRef.current = N;
  }, [N, gap]);

  if (N === 0) return null;

  const move = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (movingRef.current || !track) return;
    movingRef.current = true;
    const idx = idxRef.current + dir;
    track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = `translateX(-${idx * cardWRef.current}px)`;
    idxRef.current = idx;
  };

  const onTransitionEnd = () => {
    movingRef.current = false;
    const track = trackRef.current;
    if (!track) return;
    const p = idxRef.current;
    let np = p;
    if (p >= N * 2) np = p - N;
    else if (p < N) np = p + N;
    if (np !== p) {
      track.style.transition = 'none';
      track.style.transform = `translateX(-${np * cardWRef.current}px)`;
      idxRef.current = np;
    }
  };

  const tripled = [...items, ...items, ...items];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Алдыңғы пікір"
        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-card border border-brand-border transition-all duration-200 hover:bg-brand-green hover:text-white hover:border-brand-green sm:h-11 sm:w-11"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </button>

      <div className="overflow-hidden px-1 py-3 mx-8 sm:mx-10">
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${gap}px`, willChange: 'transform' }}
          onTransitionEnd={onTransitionEnd}
        >
          {tripled.map((node, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: cardWidth }}>
              {node}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Келесі пікір"
        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-card border border-brand-border transition-all duration-200 hover:bg-brand-green hover:text-white hover:border-brand-green sm:h-11 sm:w-11"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
}
