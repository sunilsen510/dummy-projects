import React from 'react';

const ListingCard = ({ title, price, image, location }) => {
  
  return (
    <>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{location}</p>
        <p className="text-blue-600 font-bold">{price}</p>
      </div>
    </div>
    </>
  );
};

export default ListingCard;

