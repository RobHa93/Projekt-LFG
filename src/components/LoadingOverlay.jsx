import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "home_loader_shown_v1";

export default function LoadingOverlay({
  durationMs = 3000,
  logoSrc,
  onDone,
}) {
  const barRef = useRef(null);

  // WICHTIG: initialer State basiert auf sessionStorage
  const [visible, setVisible] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  });

  useEffect(() => {
    if (!visible) {
      onDone?.();
      return;
    }

    // Scroll sperren
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let rafId;

    const animate = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);

      if (barRef.current) {
        barRef.current.style.width = `${Math.round(progress * 100)}%`;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setVisible(false);
        onDone?.();
        document.body.style.overflow = "";
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, [visible, durationMs, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black overflow-hidden">
      <div className="flex w-full max-w-xs flex-col items-center gap-6 px-6">
        <img
          src={logoSrc}
          alt="Renault"
          className="h-24 w-auto select-none"
          draggable="false"
        />

        <div className="w-full">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
            <div
              ref={barRef}
              className="h-full w-0 rounded-full bg-white transition-[width] duration-100 ease-linear"
            />
          </div>
          <div className="mt-2 text-center text-xs text-white/60">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
