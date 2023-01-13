import React from 'react';
import { XCircle } from 'react-feather';

function Menu({ toggle, children }) {
  return (
    <div className="absolute inset-0 bg-dark-100 bg-opacity-75 backdrop-blur-lg h-screen flex items-center justify-center md:hidden">
      <button
        type="button"
        onClick={() => toggle()}
        className="absolute top-5 right-5 text-dark-500 hover:text-main-500 main-transition hover:scale-110"
      >
        <div>
          <XCircle className="h-6 w-6" />
        </div>
      </button>
      {children}
    </div>
  );
}

export default Menu;
