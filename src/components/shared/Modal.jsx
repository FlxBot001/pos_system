import React from 'react'
import { useEffect } from 'react';

const Modal = ({ title, onClose, isOpen, children }) => {
    if (!isOpen) return null;

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                role="dialog"
                aria-modal="true"
                className="bg-[#1a1a1a] shadow-lg w-[90%] max-w-md rounded-lg p-4"
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-[#333]">
                    <h2 className="text-xl text-[#f5f5f5] font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 text-2xl hover:text-gray-300"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
