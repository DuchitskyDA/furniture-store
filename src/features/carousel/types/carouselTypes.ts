import { ReactElement } from 'react';

export interface CarouselProps {
  children: ReactElement[];
  arrows?: boolean;
  visibleItems: number;
}
