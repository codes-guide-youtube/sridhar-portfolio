import Link from 'next/link'
import React, { forwardRef,LinkWithRef } from 'react'
import {Navbar, Flowbite, DarkThemeToggle} from 'flowbite-react'
const Nav = () => {
  return (
    <Navbar className="items-center"
      fluid={true}
      rounded={true}>
      <Navbar.Brand as={{
        $$typeof: Symbol(React.forwardRef),
        render: LinkWithRef
      }}
        to="/navbars"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sridhar Hisaria
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Link
          href="/"
          className="hover:cursor-pointer dark:text-white"
        >
          Home
        </Link>
        <Link
          as={{
            $$typeof: Symbol(React.forward_ref),
            render: LinkWithRef
          }}
          href="/about"
          className="hover:cursor-pointer dark:text-white"
        >
          About
        </Link>
        <Link href="/apps" className="hover:cursor-pointer dark:text-white">
          Apps
        </Link>
        
        <Link href="/contact" className="hover:cursor-pointer dark:text-white">
          Contact
        </Link>
        <Flowbite>
  <DarkThemeToggle />
   </Flowbite> 
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav

