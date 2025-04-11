import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='bg-blue-400 shadow-md sticky top-0 z-50'>
         <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-white-700'>RealEstateCo</h1>
          <nav className='space-x-6'>
            <Link to='/' className='text-white-700 hover:text-red-700 font-medium'>Home</Link>
            <Link to='/about' className='text-white-700 hover:text-red-700 font-medium'>About Us</Link>
            <Link to='/listings' className='text-white-700 hover:text-red-700 font-medium'>Listings</Link>
            <Link to='/agents' className='text-white-700 hover:text-red-700 font-medium'>Agents</Link>
            <Link to='/contact' className='text-white-700 hover:text-red-700 font-medium'>Contact</Link>
          </nav>
         </div>
      </header>
    </>
  )
}

export default Header



// import { useLocation } from 'react-router-dom';

// function Header() {
//   const location = useLocation();

//   return (
//     <header className='bg-white shadow p-4'>
//       <nav className='flex space-x-4'>
//         <a href="/" className={location.pathname === '/' ? 'text-blue-600 font-bold' : ''}>Home</a>
//         {/* Add more links here */}
//       </nav>
//     </header>
//   );
// }

// export default Header;
