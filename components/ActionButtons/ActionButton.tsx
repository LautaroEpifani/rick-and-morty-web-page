import styles from './ActionButton.module.css';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button className={styles.actionButton} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default ActionButton;
