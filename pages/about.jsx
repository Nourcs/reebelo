import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layouts/Layout';
import seoConfig from '../seo/about';

// About Page
function About() {
  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <div>
        <h1 className="text-3xl font-semibold">About</h1>
      </div>
    </>
  );
}

// Page Layout
About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default About;
