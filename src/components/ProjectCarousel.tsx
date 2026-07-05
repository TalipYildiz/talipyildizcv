import React, { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PLACEHOLDER_SLIDE_COUNT = 3;

interface ProjectCarouselProps {
  images?: string[];
  projectTitle: string;
}

export default function ProjectCarousel({
  images = [],
  projectTitle,
}: ProjectCarouselProps) {
  const hasImages = images.length > 0;
  const slideCount = hasImages ? images.length : PLACEHOLDER_SLIDE_COUNT;
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + slideCount) % slideCount);
  };

  const goNext = () => goTo(current + 1);
  const goPrev = () => goTo(current - 1);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) goNext();
    else if (info.offset.x > threshold) goPrev();
  };

  return (
    <div className="relative w-full overflow-hidden rounded-t-lg border-b border-border/30 bg-muted/20">
      <div
        className={cn(
          "relative touch-pan-y",
          hasImages
            ? "flex min-h-[220px] items-center justify-center bg-gradient-to-b from-muted/40 to-muted/10 px-3 py-4"
            : "aspect-[16/10]"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={hasImages ? images[current] : `placeholder-${current}`}
            className={cn(
              hasImages
                ? "flex w-full items-center justify-center"
                : "absolute inset-0"
            )}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            drag={slideCount > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            {hasImages ? (
              <img
                src={images[current]}
                alt={`${projectTitle} screenshot ${current + 1}`}
                className="mx-auto h-auto max-h-[380px] w-auto max-w-full object-contain rounded-lg shadow-md ring-1 ring-border/30"
                draggable={false}
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br",
                  current === 0 && "from-purple-500/20 via-background to-pink-500/10",
                  current === 1 && "from-pink-500/15 via-background to-purple-500/20",
                  current === 2 && "from-purple-500/10 via-muted/30 to-pink-500/15"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/20 bg-background/60 backdrop-blur-sm">
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">
                  Görsel {current + 1}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {slideCount > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-background/80 text-foreground/70 shadow-sm backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/40 bg-background/80 text-foreground/70 shadow-sm backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {slideCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === current
                  ? "w-5 bg-purple-500"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Görsel ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
