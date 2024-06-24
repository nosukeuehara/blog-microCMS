import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-50 bg-slate-100 rounded-md mt-2 mr-3 shadow-md shadow-slate-400 w-96 right-0">
      {children}
    </div>
  );
};

export default Modal;
