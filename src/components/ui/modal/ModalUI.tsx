import styles from './modal.module.scss';
import { FC, memo, ReactNode } from 'react';
import ModalOverlay from '../modal-overlay/ModalOverlay.tsx';

interface TModalUIProps {
  onClose: () => void;
  children?: ReactNode;
}

export const ModalUI: FC<TModalUIProps> = memo(({ onClose, children }) => (
  <>
    <div className={styles.modal}>
      <div className={styles.modal__content}>{children}</div>
    </div>
    <ModalOverlay onClick={onClose} />
  </>
));

export default ModalUI;
