import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layouts/Layout';
import Hero from '../components/cards/Hero';
import Card from '../components/cards/Card';
import seoConfig from '../seo/index';

// Home Page
function Index({ data }) {
  // Limiting Categories to 3
  const [categories] = useState([...data].splice(0, 3).map((item) => ({
    name: item.split('-').join(' '), id: item,
  })));

  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <div className="flex flex-col gap-5">
        <Hero />
        <div className="flex flex-wrap gap-5">
          {[...categories].map((category) => (
            <React.Fragment key={category.id}>
              <Card category={category} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

// Retrieving data from API that will be passed to the page component as props
export async function getServerSideProps(context) {
  const data = await fetch('https://dummyjson.com/products/categories').then((res) => res.json());

  return {
    props: { data },
  };
}

// Page Layout
Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Index;
