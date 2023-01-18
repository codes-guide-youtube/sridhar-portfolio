import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
    <nav>
        <div className="align-middle bg-cyan-700 text-white">
            
            <span className="nav-head flex space-x-3"><Image src="/favicon.png" width="32" height="32" /></span>
            <ul className="font-semibold flex justify-center space-x-3">
                <li className="nav-item"><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    </nav>
)

export default Navbar
