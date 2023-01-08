import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { LogIn, ShoppingCart, User } from 'react-feather';
import Modal from '../modals/Modal';

const NAVIGATION = [
  { value: '', name: 'Home', mobile: false },
  { value: 'collections', name: 'Collections', mobile: true },
  { value: 'about', name: 'About', mobile: false },
  { value: 'contact', name: 'Contact', mobile: true },
];

function Navbar() {
  const { pathname } = useRouter();
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <nav className="flex text-sm font-semibold">
        <div className="flex items-center justify-between flex-1">
          <div>
            <Link href="/">
              <button
                id="logo"
                aria-label="Home"
                type="button"
                className="mr-10"
              >
                Logo
              </button>
            </Link>
            {NAVIGATION.map(({ name, value, mobile }) => (
              <React.Fragment key={value}>
                <Link href={`/${value}`} key={name.toLocaleLowerCase()}>
                  <button
                    id={value}
                    aria-label={name}
                    type="button"
                    className={`mr-10 ${!mobile && 'hidden md:inline-block'} ${pathname.split('/')[1] === value ? 'text-main-500' : 'text-dark-500 hover:text-dark-900 transition duration-150 ease-in-out'}`}
                  >
                    {name}
                  </button>
                </Link>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center">
            <button
              id="profile"
              aria-label="Profile"
              onClick={() => setShowSignupModal(true)}
              type="button"
              className="mr-3 flex items-center hover:bg-main-500 hover:text-dark-100 p-3 rounded-full transition duration-150 ease-in-out"
            >
              <div>
                <User className="h-5 w-5" />
              </div>
            </button>
            <Link href="/cart">
              <button
                id="cart"
                aria-label="Cart"
                type="button"
                className="relative flex items-center hover:bg-main-500 hover:text-dark-100 p-3 rounded-full transition duration-150 ease-in-out"
              >
                <div>
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div className="w-[20px] h-[20px] bg-main-500 rounded-full absolute -top-[10px] -right-1 text-[10px] text-white flex items-center justify-center font-semibold ring-2 ring-white">
                  12
                </div>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {showSignupModal && (
      <Modal
        closeModal={() => setShowSignupModal(false)}
        icon={<LogIn className="h-5 w-5" strokeWidth={2.5} />}
        title="Login to my account"
      >
        Hello World
      </Modal>
      )}
    </>
  );
}

export default Navbar;
