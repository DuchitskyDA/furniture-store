import { useSwipeable } from 'react-swipeable';

export function useSwipeHandlers(
  showNextImage: () => void,
  showPrevImage: () => void,
  resetInterval: () => void,
) {
  return useSwipeable({
    onSwipedLeft: () => {
      showNextImage();
      resetInterval();
    },
    onSwipedRight: () => {
      showPrevImage();
      resetInterval();
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
}
