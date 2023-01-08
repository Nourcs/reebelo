import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layouts/Layout';
import seoConfig from '../seo/cart';

// Cart Page
function Cart() {
  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <div>
        <h1 className="text-3xl font-semibold">Cart</h1>
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
