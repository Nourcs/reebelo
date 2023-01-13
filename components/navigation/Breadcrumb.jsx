/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ChevronRight } from 'react-feather';

function Breadcrumb({ collectionName, productName }) {
  const router = useRouter();
  const pathname = router.asPath.split('/');

  return (
    <div className="font-semibold flex items-center overflow-x-auto max-w-full">
      {pathname.map((item, index) => {
        const path = index === 0 ? '/' : [...pathname].splice(0, index + 1).join('/');
        return (
          <React.Fragment key={`${item}_${index}`}>
            <Link
              href={path}
              className={`shrink-0 main-transition ${index + 1 === pathname.length ? 'text-dark-900' : 'text-dark-500 hover:text-dark-900'}`}
            >
              <button
                id={item}
                aria-label={item}
                type="button"
                className="capitalize"
              >
                {{
                  0: 'Home',
                  1: 'Collections',
                  2: collectionName,
                  3: productName,
                }[index]}
              </button>
            </Link>
            {index < (pathname.length - 1) && (
            <div className="mx-2 text-dark-500">
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
