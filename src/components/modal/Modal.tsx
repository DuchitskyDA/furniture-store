import { FC, memo, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalUI from '../ui/modal/ModalUI.tsx';

interface ModalProps {
  onClose: () => void;
  children?: ReactNode;
}

const modalRoot = document.getElementById('modals');

export const Modal: FC<ModalProps> = memo(({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement,
  );
});
