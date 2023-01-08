import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/layouts/Layout';
import Breadcrumb from '../../components/navigation/Breadcrumb';
import Card from '../../components/cards/Card';
import seoConfig from '../../seo/collections';

// Collections Page
function Collections({ data }) {
  // Store categories in the state
  const [categories] = useState([...data].map((item) => ({
    name: item.split('-').join(' '), id: item,
  })));

  return (
    <>
      <NextSeo {...seoConfig().seo} />
      <Breadcrumb />
      <div className="flex mt-5 flex-wrap gap-5">
        {categories.map((category) => (
          <React.Fragment key={category.id}>
            <Card category={category} />
          </React.Fragment>
        ))}
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
Collections.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Collections;
