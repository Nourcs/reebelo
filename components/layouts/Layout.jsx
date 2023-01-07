import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer';

function Layout({ children }) {
  return (
    <div className="h-full min-h-screen flex flex-col justify-between">
      <header className="px-5 md:px-10 pt-10 pb-5 fixed bg-white z-10 w-full">
        <Navbar />
      </header>
      <main className="px-5 md:px-10 pt-32 pb-5 flex-1 h-full">
        {children}
      </main>
      <footer className="pt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
