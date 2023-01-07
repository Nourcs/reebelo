import React, { useState } from 'react';

function ImageViewer({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex-1 flex mr-5">
      <div className="max-h-[500px] overflow-y-auto gap-3">
        <div className="flex flex-col gap-2">
          {product.images.map((item, index) => (
            <button key={item} type="button" onClick={() => setSelectedImage(index)}>
              <img
                src={item}
                alt="fa"
                className={`w-28 h-28 object-contain object-center ${index !== selectedImage && 'opacity-30 hover:opacity-100'} transition duration-150 ease-in-out`}
              />
            </button>
          ))}

        </div>
      </div>
      <div className="flex-1 h-[500px] ml-2 flex items-center justify-center">
        <img src={product.images[selectedImage]} alt="fa" className=" object-contain w-full h-full" />
      </div>
    </div>
  );
}

export default ImageViewer;
