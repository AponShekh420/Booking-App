import React, { useState } from 'react';

const PriceRange = () => {
  const [price, setPrice] = useState(0); // Default price value

  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <div className="relative w-full">
      {/* Range Input */}
      <input
        type="range"
        min="0"
        max="1500"
        value={price}
        onChange={handleChange}
        className="w-full appearance-none h-[5px] bg-black outline-none rounded"
      />

      {/* Label */}
      <div
        className="absolute top-6 left-0 transform -translate-x-1/2 font-semibold text-md px-2 py-1"
        style={{
          left: `${(price / 1500) * 100}%`, // Move the label dynamically
          transform: `translateX(-${(price / 1500) * 100}%)`,
        }}
      >
        £{price}
      </div>

      {/* Custom Range Circle */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border: 5px solid red;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid red;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PriceRange;
