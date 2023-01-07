import React from 'react';
import Layout from '../components/layouts/Layout';

// Contact Page
function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Contact</h1>
    </div>
  );
}

// Page Layout
Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Contact;
