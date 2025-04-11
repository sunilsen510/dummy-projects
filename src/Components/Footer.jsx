import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-100 mt-8 py-6'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          &copy; {new Date().getFullYear()} <span className='text-blue-600 font-semibold'>RealEstateCo</span>. All right reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
