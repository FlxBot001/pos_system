import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'; // For animations

const Modal = ({
  title,
  onClose,
  isOpen,
  children,
  animationType = 'fade', // Modal entrance animation type
  duration = 300, // Duration of the animation
  easingFunction = 'ease-in-out', // Easing function
  overlayColor = 'rgba(0, 0, 0, 0.5)', // Overlay color
  overlayBlur = false, // Apply blur effect to overlay
  dragEnabled = false, // Enable drag functionality
  closeButton = '×', // Custom close button
  onModalOpen = () => {}, // Custom lifecycle hook for when modal opens
  onModalClose = () => {}, // Custom lifecycle hook for when modal closes
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      onModalOpen();
    } else {
      setTimeout(() => setIsVisible(false), duration); // Ensure animation completes
      onModalClose();
    }
  }, [isOpen, duration, onModalOpen, onModalClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') handleTabNavigation(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const startDrag = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - modalRef.current.offsetLeft,
      y: e.clientY - modalRef.current.offsetTop,
    });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  const handleDrag = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      modalRef.current.style.left = `${newX}px`;
      modalRef.current.style.top = `${newY}px`;
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleTabNavigation = (e) => {
    // Implement Tab navigation logic if required
  };

  return isVisible ? (
    <CSSTransition
      in={isOpen}
      timeout={duration}
      classNames={animationType}
      unmountOnExit
    >
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ backgroundColor: overlayColor, backdropFilter: overlayBlur ? 'blur(5px)' : 'none' }}
        aria-hidden="true"
      >
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="bg-[#1a1a1a] shadow-lg w-[90%] max-w-md rounded-lg p-4 relative"
          style={{ cursor: dragEnabled ? 'move' : 'auto' }}
          onMouseDown={dragEnabled ? startDrag : null}
          onMouseUp={dragEnabled ? stopDrag : null}
          onMouseMove={dragging ? handleDrag : null}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#333]">
            <h2 id="modal-title" className="text-xl text-[#f5f5f5] font-semibold">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 text-2xl hover:text-gray-300"
              aria-label="Close modal"
            >
              {closeButton}
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </CSSTransition>
  ) : null;
};

export default Modal;
