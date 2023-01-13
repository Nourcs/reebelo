import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layouts/Layout';
import seoConfig from '../seo/cart';
import { useCartContext } from '../context/state';

// Cart Page
function Cart() {
  const {
    setCart,
  } = useCartContext();
  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <div>
        <h1 className="text-3xl font-semibold">Cart</h1>
        <button
          id="clear_cart"
          aria-label="Clear Cart"
          onClick={() => {
            setCart({ products: 0 });
          }}
          type="button"
          className="mt-10 text-dark-400 hover:text-dark-900 main-transition"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}

// Page Layout
Cart.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Cart;
