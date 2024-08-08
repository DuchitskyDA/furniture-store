import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Text from '../../../shared/ui/text/Text.tsx';

interface ForwardLinkProps {
  children: ReactNode;
}

const ForwardLink: FC<ForwardLinkProps> = ({ children }) => {
  return (
    <div className={styles.link}>
      <Text as={'span'} family={'inter'} size={14} weight={500} height={24}>
        {children}
      </Text>
      <ArrowRightAltIcon />
    </div>
  );
};

export default ForwardLink;
