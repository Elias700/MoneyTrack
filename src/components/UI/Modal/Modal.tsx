import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg relative animate-fadeIn">
        
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold text-(--color-primary-500)">{title}</h2>
            <button onClick={onClose} className="text-(--color-primary-300) hover:text-red-500 transition">
              <X size={22} />
            </button>
          </div>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
