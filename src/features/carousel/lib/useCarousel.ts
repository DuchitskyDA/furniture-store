import { useCallback, useEffect, useRef, useState } from 'react';

export function useCarousel(totalItems: number, visibleItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const showNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(totalItems / visibleItems) - 1
        ? 0
        : prevIndex + 1,
    );
  }, [totalItems, visibleItems]);

  const showPrevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(totalItems / visibleItems) - 1
        : prevIndex - 1,
    );
  }, [totalItems, visibleItems]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(showNextImage, 5000);
  }, [showNextImage]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  return { currentIndex, showNextImage, showPrevImage, resetInterval };
}
