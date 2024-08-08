import styles from './modal-overlay.module.scss';

const ModalOverlay = ({ onClick }: { onClick: () => void }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
