import React, { useState } from 'react';
import Image from 'next/image';

function ImageViewer({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex-1 flex flex-col-reverse lg:flex-row mb-5 lg:mb-0 lg:mr-5 max-h-[560px]">
      <div className="flex lg:flex-col overflow-x-auto">
        {product.images.map((item, index) => (
          <button
            id={`${item}-${index + 1}`}
            aria-label={`Image ${index + 1}`}
            key={item}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`shrink-0 mt-3 lg:mb-3 lg:mt-0 mr-3 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain object-center ${index !== selectedImage && 'opacity-30 hover:opacity-100'} main-transition relative`}
          >
            <Image
              src={item}
              alt={product.title}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-[450px] relative">
        <Image
          src={product.images[selectedImage]}
          alt={product.title}
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
