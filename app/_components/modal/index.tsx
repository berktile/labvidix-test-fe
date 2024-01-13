import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

interface CustomImageProps {
  src: string;
  alt: string;
  maxWidth?: number;
  maxHeight?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  maxWidth = 1024,
  maxHeight = 768,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
      setDimensions({
        width: Math.floor(img.width * ratio),
        height: Math.floor(img.height * ratio),
      });
    };

    return () => {
      img.onload = null;
    };

    
  }, [src, maxWidth, maxHeight]);

  return <img src={src} alt={alt} width={dimensions.width} height={dimensions.height} />;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

const Modal = ({ isOpen, onClose, imgUrl }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999999,
          }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            ref={modalRef}
          >
            <CustomImage src={imgUrl} alt="Logo" />
        
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
