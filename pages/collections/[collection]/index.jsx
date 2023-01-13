import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  ChevronDown, Search,
} from 'react-feather';
import { NextSeo } from 'next-seo';
import Breadcrumb from '../../../components/navigation/Breadcrumb';
import Layout from '../../../components/layouts/Layout';
import ProductCard from '../../../components/cards/ProductCard';

import seoConfig from '../../../seo/collection';

// Filter Component
function Filters() {
  return (
    <div className="w-1/4 p-5 rounded-lg bg-dark-100 shadow max-h-[95vh] sticky top-28 hidden lg:block">Filters</div>
  );
}

// Sort Component
function Sort() {
  return (
    <div className="flex flex-col md:flex-row">
      <label className="flex items-center border border-dark-200 rounded-lg md:flex-1 md:mr-3 relative" htmlFor="search">
        <div className="left-3 absolute">
          <Search className="h-5 w-5 text-dark-500" strokeWidth={2.5} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="h-10 placeholder:text-dark-500 outline-none w-full pl-10 bg-transparent rounded-lg pr-3"
          id="search"
        />
      </label>
      <div className="flex-1 md:flex-none flex items-center mt-3 md:mt-0">
        <button
          id="filters"
          aria-label="Filters"
          type="button"
          className="w-1/2 md:hidden mr-3 h-10 border border-dark-200 rounded-lg flex items-center justify-between font-medium px-3"
        >
          Filters
        </button>
        <button
          id="sortby"
          aria-label="Sort By"
          type="button"
          className="h-10 font-medium border border-dark-200 rounded-lg flex items-center justify-between w-1/2 md:w-60 px-3"
        >
          Sort By
          <div className="text-dark-500">
            <ChevronDown className="h-5 w-5" />
          </div>
        </button>
      </div>
    </div>
  );
}

// Collection Page
function Collection({ data }) {
  const { query } = useRouter();
  const currentCollection = [...data.categories].map((item) => ({
    name: item.split('-').join(' '), id: item,
  })).find((category) => category.id === query.collection);

  const [collection] = useState(currentCollection);
  const [products, setProducts] = useState([...data.products.products]);

  return (
    <>
      <NextSeo {...seoConfig(collection.name.toUpperCase()).seo} />
      <Breadcrumb collectionName={collection.name} />
      <section className="mt-5 flex gap-5 relative">
        <Filters />
        <div className="w-full lg:w-3/4">
          <Sort />
          <div className="flex flex-wrap mt-3 items">
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                <ProductCard
                  collection={collection}
                  product={product}
                  index={index}
                />
              </React.Fragment>
            ))}
          </div>
          {/* CTA for data lazy load  */}
          <button
            id="view-more"
            aria-label="View More"
            onClick={() => setProducts([...products, ...data.products.products])}
            type="button"
            className="mt-2 h-10 w-full border-2 border-main-500 rounded-lg text-sm text-main-500 font-medium hover:bg-main-500 hover:text-white main-transition"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
}

// Retrieving data from API that will be passed to the page component as props
export async function getServerSideProps(context) {
  const categories = await fetch('https://dummyjson.com/products/categories').then((res) => res.json());
  const products = await fetch(`https://dummyjson.com/products/category/${context.query.collection}/?limit=100`).then((res) => res.json());

  return {
    props: { data: { categories, products } },
  };
}

// Page Layout
Collection.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Collection;
