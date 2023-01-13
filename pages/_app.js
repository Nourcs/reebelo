import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';
import SEO from '../next-seo.config';
import AppContext from '../context/state';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({ products: 0 });
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <DefaultSeo
        {...SEO}
      />
      <AppContext.Provider value={{
        cart, setCart,
      }}
      >
      {getLayout(<Component {...pageProps} />)}
      </AppContext.Provider>
    </>,
  );
}
