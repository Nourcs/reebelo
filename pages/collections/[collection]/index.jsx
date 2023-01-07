import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  ChevronDown,
} from 'react-feather';
import Breadcrumb from '../../../components/navigation/Breadcrumb';
import Layout from '../../../components/layouts/Layout';
import ProductCard from '../../../components/cards/ProductCard';

// Filter Component
function Filters() {
  return (
    <div className="w-1/4 p-5 rounded-lg bg-dark-100 shadow max-h-[95vh] sticky top-24 hidden lg:block">Filters</div>
  );
}

// Sort Component
function Sort() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="h-10 border border-dark-200 rounded-lg flex items-center px-3 flex-1 mr-3 placeholder:text-dark-500"
      />
      <button type="button" className="h-10 border border-dark-200 rounded-lg flex items-center justify-between w-60 text-sm px-3">
        Sort By
        <div className="text-dark-500">
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
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
            onClick={() => setProducts([...products, ...data.products.products])}
            type="button"
            className="mt-2 h-10 w-full border-2 border-main-500 rounded-lg text-sm text-main-500 font-medium hover:bg-main-500 hover:text-white transition duration-150 ease-in-out"
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
