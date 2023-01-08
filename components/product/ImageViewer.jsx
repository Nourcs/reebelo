import React, { useState } from 'react';
import Image from 'next/image';

function ImageViewer({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex-1 flex mr-5">
      <div className="max-h-[500px] overflow-y-auto gap-3">
        <div className="flex flex-col gap-2">
          {product.images.map((item, index) => (
            <button
              id={`${item}-${index + 1}`}
              aria-label={`Image ${index + 1}`}
              key={item}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`w-32 h-32 object-contain object-center ${index !== selectedImage && 'opacity-30 hover:opacity-100'} transition duration-150 ease-in-out relative`}
            >
              <Image
                src={item}
                alt="Mountains"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 h-[500px] ml-2 flex items-center justify-center relative">
        <Image
          src={product.images[selectedImage]}
          alt="Mountains"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default ImageViewer;
