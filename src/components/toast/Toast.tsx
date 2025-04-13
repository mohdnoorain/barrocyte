import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); 
    const cleanup = setTimeout(onClose, 3000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${
        visible ? styles.show : styles.hide
      }`}
      onClick={onClose}
    >
      {message}
    </div>
  );
};

export default Toast;
