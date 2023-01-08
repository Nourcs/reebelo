import React from 'react';
import {
  Heart,
  Package,
  Share2,
} from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

function ProductCard({ collection, product, index }) {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 sm:pr-3 pb-3">
      <div className="shadow bg-dark-100 rounded-lg h-full">
        <Link href={`/collections/${collection.id}/${product.id}`}>
          <div className="h-48 w-full relative">
            <Image
              src={product.thumbnail}
              alt="Mountains"
              fill
              style={{
                objectFit: 'cover',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
            <div
              className="w-full h-full rounded-t-lg absolute"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3015800070028011) 0%, rgba(125,125,125,0) 50%, rgba(255,255,255,0) 100%)',
              }}
            />
            <button
              id={`favorite-${product.id}`}
              aria-label={`Add ${product.title} To Favorites`}
              type="button"
              className="absolute top-5 right-5 text-dark-100 group"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <Heart className={`h-5 w-5 group-hover:fill-dark-100 ${index % 5 === 0 && 'fill-dark-100'}`} strokeWidth={2.5} />
              </div>
            </button>
          </div>
          <div className="px-5 py-3">
            <h2 className="font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
              {product.title}
            </h2>
            <h3 className="text-main-500 font-semibold">
              $
              {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </h3>
            <div className="flex items-center justify-between mt-5 text-sm">
              <div className="flex items-center">
                <div className="mr-2">
                  <Package className="h-4 w-4" />
                </div>
                {product.stock}
                {' '}
                Left
              </div>
              <button
                id={`share-${product.id}`}
                aria-label={`Share ${product.title}`}
                onClick={(e) => {
                  e.preventDefault();
                }}
                type="button"
                className="text-dark-400 hover:text-main-500 transition duration-150 ease-in-out"
              >
                <div>
                  <Share2 className="h-5 w-5" />
                </div>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
