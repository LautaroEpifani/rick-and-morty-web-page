import React from "react";
import styles from "./PaginationButton.module.css";
import { PaginationButtonProps } from "@/types";

const PaginationButton: React.FC<PaginationButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default PaginationButton;
