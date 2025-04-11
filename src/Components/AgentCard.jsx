import React from 'react'

export const AgentCard = ( { name, image, bio }) => {
  return (
    <>
      <div className='bg-white shadow-lg rounded-xl p-4 text-center'>
        <img src={image} alt={name} className='w-24 h-24 rounded-full mx-auto mb-4' />
        <h3 className='text-xl font-semibold text-gray-800'>{name}</h3>
        <p className='text-gray-600 text-sm'>{bio}</p>
      </div>
    </>
  );
}
