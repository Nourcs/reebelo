import Link from 'next/link';
import React from 'react';

function Card({ category }) {
  return (
    <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 grow h-60 p-10 flex flex-col justify-between">
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
              className="light-button main-transition"
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
