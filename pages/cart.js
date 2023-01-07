import React from 'react';
import Layout from '../components/layouts/Layout';

// Cart Page
function Cart() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Cart</h1>
    </div>
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
