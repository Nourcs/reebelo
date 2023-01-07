import React from 'react';
import Layout from '../components/layouts/Layout';

// About Page
function About() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">About</h1>
    </div>
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
