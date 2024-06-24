import React from "react";

const Modal = ({ modalOpen, children }: { modalOpen: boolean, children: React.ReactNode }) => {
  if (modalOpen) {
    return (
      <div className="fixed z-50 bg-slate-100 rounded-md mt-2 mr-3 shadow-md shadow-slate-400 w-96 right-0">
        {children}
      </div>
    )
  } else {
    return null
  }
};

export default Modal;
