import { ElementType, FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './text.module.scss';
import { FontFamiliesClasses } from '../../../utils/constants/fontFamilyClasses.ts';

interface TitleProps {
  as: ElementType;
  children: ReactNode;
  size?: 14 | 16 | 20 | 18 | 22 | 26 | 28 | 38 | 40;
  weight?: 400 | 500 | 600 | 700 | 800;
  align?: 'center' | 'left' | 'right';
  family?: FontFamiliesClasses;
  spacing?: '0' | '06';
  height?: number | string;
  color?: 'white' | 'grey' | 'blue' | 'green';
  className?: string;
}

const Text: FC<TitleProps> = ({
  as: Tag = 'div',
  size = 16,
  family = 'poppins',
  align = 'left',
  weight = 400,
  children,
  spacing = 0,
  height = 16,
  color,
  className = '',
}) => {
  const classNames = clsx(
    styles.text,
    styles[`size${size}`],
    styles[`weight${weight}`],
    styles[`${align}`],
    styles[`${family}`],
    styles[`spacing${spacing}`],
    styles[`height${height}`],
    styles[`${color}`],
    className,
  );
  return (
    <Tag className={classNames} style={{ className }}>
      {children}
    </Tag>
  );
};

export default Text;
