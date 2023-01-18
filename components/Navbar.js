import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="m-auto">
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
          <Link href="/" className="nav-head">My App</Link>
        
      </div>
      <div className="block lg:hidden">
        <button className="nav-hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="nav-list">
        
            <Link href="/about" className="nav-item">
               About
             </Link>
          
          
            <Link href="/contact" className="nav-item">
             Contact
             </Link>
        
         </div>
       </div>
     </nav>
     </div>
  )
}

export default Navbar

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const Navbar = () => (
//     <nav>
//         <div className="align-middle bg-cyan-700 text-white">
            
//             <span className="nav-head flex space-x-3"><Image src="/favicon.png" width="32" height="32" /></span>
//             <ul className="font-semibold flex justify-center space-x-3">
//                 <li className="nav-item"><Link href="/">Home</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/about">About</Link></li>
//             </ul>
//         </div>
//     </nav>
// )

// export default Navbar
