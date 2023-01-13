import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <section className="card h-[500px] flex items-center justify-center px-10 lg:px-20">
      <div className="w-full">
        <h2 className="text-xl font-light capitalize">Lorem ipsum</h2>
        <h1 className="text-5xl font-bold mt-2 capitalize">dolor sit</h1>
        <div className="flex items-start justify-between mt-10">
          <div className="flex-1">
            <Link href="/collections">
              <button
                id="shop-by-collection"
                aria-label="Shop By Collection"
                type="button"
                className="dark-button main-transition"
              >
                Shop by collection
              </button>
            </Link>
          </div>
          <div className="hidden flex-1 text-right md:flex flex-col items-end">
            <h3 className="font-bold capitalize">Lorem ipsum dolor</h3>
            <p className="max-w-sm font-light text-dark-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
