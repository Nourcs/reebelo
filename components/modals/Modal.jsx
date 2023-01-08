import React, { useEffect } from 'react';
import { XCircle } from 'react-feather';

function Modal({
  title, closeModal, children, icon,
}) {
  const nu = null;

  useEffect(() => {
    const el = document.getElementsByTagName('body')[0];
    el.classList.add('overflow-hidden');

    return () => {
      el.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen absolute inset-0 z-40">
      <div className="bg-black absolute inset-0 bg-opacity-50 backdrop-blur-[2px] filter" onClick={closeModal} />
      <div className="bg-white z-50 w-1/3 rounded-lg">
        <div className="border-b px-5 py-5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3 text-main-500">
              {icon}
            </div>
            <h2 className="font-semibold capitalize">
              {title || 'Title'}
            </h2>
          </div>
          <button
            id="close-modal"
            aria-label="Close Modal"
            type="button"
            onClick={closeModal}
          >
            <div>
              <XCircle className="h-6 w-6" />
            </div>
          </button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
