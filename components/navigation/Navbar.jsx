import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useReducer } from 'react';
import {
  LogIn, Menu, ShoppingCart, User,
} from 'react-feather';
import Modal from '../modals/Modal';
import MenuModal from '../modals/Menu';
import { useCartContext } from '../../context/state';

const NAVIGATION = [
  { value: '', name: 'Home' },
  { value: 'collections', name: 'Collections' },
  { value: 'about', name: 'About' },
  { value: 'contact', name: 'Contact' },
];

function Navbar() {
  const { pathname } = useRouter();
  const [showSignupModal, toggleSignupModal] = useReducer((state) => !state, false);

  // const [showMenu, toggleMenu]seState(false);
  const [showMenu, toggleMenu] = useReducer((state) => !state, false);
  const {
    cart,
  } = useCartContext();

  return (
    <>
      <nav className="flex text-sm font-semibold">
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center">
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
            <div className="hidden md:block">
              {NAVIGATION.map(({ name, value, mobile }) => (
                <React.Fragment key={value}>
                  <Link href={`/${value}`} key={name.toLocaleLowerCase()}>
                    <button
                      id={value}
                      aria-label={name}
                      type="button"
                      className={`mr-10  ${pathname.split('/')[1] === value ? 'text-main-500' : 'text-dark-500 hover:text-dark-900 main-transition'}`}
                    >
                      {name}
                    </button>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              id="profile"
              aria-label="Profile"
              onClick={() => toggleSignupModal()}
              type="button"
              className="mr-3 icon-button main-transition"
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
                className="mr-3 md:mr-0 relative icon-button main-transition"
              >
                <div>
                  <ShoppingCart className="h-5 w-5" />
                </div>
                {cart.products > 0 && (
                <div className="w-[20px] h-[20px] bg-main-500 rounded-full absolute -top-[10px] -right-1 text-[10px] text-white flex items-center justify-center font-semibold ring-2 ring-white">
                  {cart.products}
                </div>
                )}
              </button>
            </Link>
            <button
              onClick={() => toggleMenu()}
              type="button"
              className="flex md:hidden items-center hover:bg-main-500 hover:text-dark-100 p-3 rounded-full main-transition"
            >
              <div>
                <Menu className="h-5 w-5" />
              </div>
            </button>
          </div>
        </div>
      </nav>
      {showSignupModal && (
      <Modal
        toggle={toggleSignupModal}
        icon={<LogIn className="h-5 w-5" strokeWidth={2.5} />}
        title="Login to my account"
      >
        Hello World
      </Modal>
      )}
      {showMenu && (
        <MenuModal toggle={toggleMenu}>
          <div className="flex flex-col items-center">
            {NAVIGATION.map(({ name, value }) => (
              <React.Fragment key={value}>
                <Link
                  href={`/${value}`}
                  key={name.toLocaleLowerCase()}
                  onClick={() => toggleMenu()}
                  className="group"
                >
                  <button
                    id={value}
                    aria-label={name}
                    type="button"
                    className={`text-xl font-semibold mb-3 block ${pathname.split('/')[1] === value ? 'text-main-500' : 'text-dark-500 group-hover:text-dark-900 main-transition'}`}
                  >
                    {name}
                  </button>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </MenuModal>
      )}
    </>
  );
}

export default Navbar;
