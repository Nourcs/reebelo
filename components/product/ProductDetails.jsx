import React, { useState } from 'react';
import {
  ChevronDown, ChevronUp, ShoppingCart, Star,
} from 'react-feather';

const COLORS = [
  { name: 'Tangerine', value: '#fb8500' },
  { name: 'Navy Blue', value: '#023047' },
  { name: 'Daffodil', value: '#ffb703' },
  { name: 'Emerald', value: '#84a98c' },
  { name: 'Fuchsia', value: '#be95c4' },
];

function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="">
        <div className="flex items-end justify-between">
          <h1 className="text-xl font-light">
            {product.title}
          </h1>
          <div className="flex items-center text-sm">
            <div className="mr-2">
              <ShoppingCart className="h-5 w-5" />
            </div>
            {' '}
            Selling Fast!
          </div>
        </div>
        <h2 className="text-2xl font-semibold">
          $
          {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h2>
        <div className="flex mt-3 items-center">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={`star_${item}`}>
              <Star className={`h-5 w-5 ${index < Math.round(product.rating) ? 'fill-main-500 text-main-500 stroke-1' : ' stroke-1 stroke-dark-400'}`} />
            </div>
          ))}
          <div className="ml-2 text-sm text-dark-500 flex items-center">
            ( 2,135 Verified Ratings )
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-medium">Quantity</h3>
          <div className="border border-dark-300 h-12 flex items-center justify-between px-3 mt-1 w-24">
            <span>{quantity}</span>
            <div className="flex flex-col">
              <button
                onClick={() => {
                  if (product.stock > quantity) setQuantity(quantity + 1);
                }}
                type="button"
                className="text-dark-400 hover:text-dark-900 transition duration-150 ease-in-out"
              >
                <div>
                  <ChevronUp className="h-4 w-4" />
                </div>
              </button>
              <button
                onClick={() => {
                  if (quantity > 0)setQuantity(quantity - 1);
                }}
                type="button"
                className="text-dark-400 hover:text-dark-900 transition duration-150 ease-in-out"
              >
                <div>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-sm font-medium">
            Color:
            {' '}
            {selectedColor.name}
          </h3>
          <div className="flex mt-3 ml-1">
            {COLORS.map((color) => (
              <button
                key={color.value}
                className="h-6 w-6 rounded-full mr-3"
                type="button"
                onClick={() => setSelectedColor(color)}
                style={{
                  backgroundColor: color.value,
                  outline: color.value === selectedColor.value ? `2px solid ${color.value}` : 'none',
                  outlineOffset: 3,
                }}
              >
                {' '}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-main-500 h-10 w-full rounded-lg text-sm font-semibold text-white hover:bg-white hover:text-main-500 border-2 border-main-500 tranistion duration-150 ease-in-out"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;
