import Link from 'next/link';
import React from 'react';

function Card({ category }) {
  return (
    <div className="bg-dark-100 shadow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 grow h-60 rounded-lg p-10 flex flex-col justify-between">
      <div>
        <h3 className="font-light capitalize">Explore</h3>
        <h2 className="text-xl font-bold capitalize">{category.name}</h2>
      </div>
      <div className="flex items-start justify-between mt-10">
        <div className="flex-1">
          <Link href={`/collections/${category.id}`}>
            <button
              id={`browse-${category.id}`} 
              aria-label={`Browse ${category.name}`}
              type="button"
              className="bg-transparent text-main-500 h-10 px-5 rounded-full text-sm font-semibold capitalize border-main-500 border-2 hover:bg-main-500 hover:text-dark-100 transition duration-150 ease-in-out"
            >
              Browse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
