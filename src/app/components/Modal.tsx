import React from "react";

const Modal = ({
  modalOpen,
  children,
}: {
  modalOpen: boolean;
  children: React.ReactNode;
}) => {
  if (modalOpen) {
    return (
      <div
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        className="fixed z-50 bg-slate-50 rounded-md mt-2 mr-3 shadow-lg right-0 w-9/12 sm:w-96"
      >
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
