import React, { useState } from 'react';
import {
  Award,
  ChevronDown, ChevronUp, Star,
} from 'react-feather';
import { useCartContext } from '../../context/state';

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
  const {
    cart, setCart,
  } = useCartContext();

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="">
        <div className="flex items-end justify-between">
          <h1 className="text-xl font-light">
            {product.title}
          </h1>
          <div className="flex items-center text-sm animate-bounce">
            <div className="mr-2">
              <Award className="h-5 w-5" />
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
                id="increment"
                aria-label="Increment Quantity"
                onClick={() => {
                  if (product.stock > quantity) setQuantity(quantity + 1);
                }}
                type="button"
                className="text-dark-400 hover:text-dark-900 main-transition"
              >
                <div>
                  <ChevronUp className="h-4 w-4" />
                </div>
              </button>
              <button
                id="decrement"
                aria-label="Decrement Quantity"
                onClick={() => {
                  if (quantity > 1)setQuantity(quantity - 1);
                }}
                type="button"
                className="text-dark-400 hover:text-dark-900 main-transition"
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
                id={color.value}
                aria-label={color.name}
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
        onClick={() => {
          setCart({ products: cart.products + quantity });
        }}
        id="add-to-cart"
        aria-label="Add to Cart"
        type="button"
        className="fixed md:relative left-0 bottom-0 bg-main-500 h-16 md:h-10 mt-5 w-full md:rounded-lg text-sm font-semibold text-white md:hover:bg-white md:hover:text-main-500 border-2 border-main-500 tranistion duration-150 ease-in-out"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;
