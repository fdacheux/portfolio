'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * -----------------------------------------------------------------------------
 * 1. TYPE DEFINITIONS
 * -----------------------------------------------------------------------------
 * Each item in the carousel represents a project in your portfolio.
 */
export interface CarouselItem {
  id: string | number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
  year?: string;
}

export interface CarouselProps {
  /** Array of portfolio projects to display */
  items: CarouselItem[];
  /** Whether the carousel should advance automatically (defaults to true) */
  autoPlay?: boolean;
  /** Duration between slides in milliseconds (defaults to 5000ms / 5s) */
  autoPlayInterval?: number;
  /** Whether navigation loops back to the start after reaching the last slide (defaults to true) */
  loop?: boolean;
  /** Optional custom CSS classes for the outer wrapper */
  className?: string;
}

/**
 * -----------------------------------------------------------------------------
 * 2. CAROUSEL COMPONENT
 * -----------------------------------------------------------------------------
 * A simple, accessible, touch-friendly carousel for Next.js, React, and Tailwind CSS.
 */
export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  loop = true,
  className = '',
}) => {
  // ---------------------------------------------------------------------------
  // STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  // Tracks the index of the currently active slide (0 to items.length - 1)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically pauses autoplay when the user hovers over the carousel
  const [isPaused, setIsPaused] = useState(false);

  // Coordinates for touch/mouse swipe detection
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const total = items.length;

  // ---------------------------------------------------------------------------
  // NAVIGATION HANDLERS
  // ---------------------------------------------------------------------------
  // Advance to next slide
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === total - 1) return loop ? 0 : prev;
      return prev + 1;
    });
  }, [total, loop]);

  // Go to previous slide
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) return loop ? total - 1 : 0;
      return prev - 1;
    });
  }, [total, loop]);

  // Jump to specific slide when clicking a dot
  const handleGoTo = (index: number) => {
    setCurrentIndex(index);
  };

  // ---------------------------------------------------------------------------
  // AUTOPLAY TIMER
  // ---------------------------------------------------------------------------
  // Automatically advances slides every `autoPlayInterval` ms
  useEffect(() => {
    if (!autoPlay || isPaused || total <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isPaused, total, handleNext]);

  // ---------------------------------------------------------------------------
  // KEYBOARD NAVIGATION
  // ---------------------------------------------------------------------------
  // Listen for Left & Right Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // ---------------------------------------------------------------------------
  // TOUCH / SWIPE GESTURES
  // ---------------------------------------------------------------------------
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum drag distance in pixels to trigger slide

    if (diff > threshold) handleNext(); // Swiped left -> next
    else if (diff < -threshold) handlePrev(); // Swiped right -> prev

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Portfolio projects carousel"
      // Pause autoplay on mouse hover
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      // Touch handlers for mobile swipe
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl ${className}`}
    >
      {/* ----------------------------------------------------------------- */}
      {/* 1. SLIDE STAGE: Visual Image and Text Overlay */}
      {/* ----------------------------------------------------------------- */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={item.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive
                  ? 'opacity-100 z-10 pointer-events-auto'
                  : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Project Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Contrast Scrim Gradient to ensure text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

              {/* Project Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 z-20 flex flex-col justify-end max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-orange font-medium mb-2">
                  <span>{item.category}</span>
                  {item.year && (
                    <>
                      <span className="text-neutral-500">·</span>
                      <span className="text-neutral-400">{item.year}</span>
                    </>
                  )}
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.link && (
                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 bg-brand-orange hover:bg-amber-500 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>View Project</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* --------------------------------------------------------------- */}
        {/* 2. NAVIGATION ARROWS (Left & Right) */}
        {/* --------------------------------------------------------------- */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-neutral-950/60 hover:bg-neutral-900 text-white backdrop-blur-sm border border-neutral-800 transition-transform active:scale-95 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-neutral-950/60 hover:bg-neutral-900 text-white backdrop-blur-sm border border-neutral-800 transition-transform active:scale-95 cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* 3. PAGINATION DOTS & COUNTER */}
      {/* ----------------------------------------------------------------- */}
      {total > 1 && (
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800/80 flex items-center justify-between">
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {items.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => handleGoTo(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  dotIndex === currentIndex
                    ? 'w-6 bg-brand-orange'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          {/* Numeric Slide Counter */}
          <div className="text-xs font-mono text-neutral-400">
            <span className="text-brand-orange font-semibold tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-1 text-neutral-600">/</span>
            <span className="tabular-nums">
              {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;