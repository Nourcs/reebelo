import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layouts/Layout';
import seoConfig from '../seo/contact';

// Contact Page
function Contact() {
  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <div>
        <h1 className="text-3xl font-semibold">Contact</h1>
      </div>
    </>
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
