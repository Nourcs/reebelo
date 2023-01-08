import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Breadcrumb from '../../../components/navigation/Breadcrumb';
import Layout from '../../../components/layouts/Layout';
import ImageViewer from '../../../components/product/ImageViewer';
import ProductDetails from '../../../components/product/ProductDetails';
import seoConfig from '../../../seo/product';

function Product({ data }) {
  const [product] = useState(data.product);

  return (
    <>
      <NextSeo {...seoConfig(product.title).seo} />
      <Breadcrumb collectionName={product.category.split('-').join(' ')} productName={product.title} />
      <div className="flex mt-5">
        <ImageViewer product={product} />
        <ProductDetails product={product} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const product = await fetch(`https://dummyjson.com/products/${context.query.product}`).then((res) => res.json());

  return {
    props: { data: { product } },
  };
}

Product.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Product;
