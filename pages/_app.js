import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <DefaultSeo
        {...SEO}
        dangerouslySetAllPagesToNoFollow={process.env.NEXT_PUBLIC_NODE_ENV !== 'production'}
        dangerouslySetAllPagesToNoIndex={process.env.NEXT_PUBLIC_NODE_ENV !== 'production'}
      />
      <Component {...pageProps} />
    </>,
  );
}
