'use client'

import useHash from '@/app/hooks/UseHash';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const hash = useHash();

    const newPath = hash !== null ? `${pathname}#${hash}` : pathname;
    
    console.log("hash", newPath);
    

    const navLinks = <>
        <li><Link className={`${newPath === '/#onlineStatus' ? `${styles.activeNavLink} active` : `${styles.inActiveNavLink}`}`} href={'#onlineStatus'}>Status</Link></li>
        <li><Link className={`${newPath === '/#about' ? `${styles.activeNavLink} active` : `${styles.inActiveNavLink}`}`} href={'#about'}>About</Link></li>
        <li><Link className={`${newPath === '/#skills' ? `${styles.activeNavLink} active` : `${styles.inActiveNavLink}`}`} href={'#skills'}>Skills</Link></li>
        <li><Link className={`${newPath === '/#experiences' ? `${styles.activeNavLink} active` : `${styles.inActiveNavLink}`}`} href={'#experiences'}>Experiences</Link></li>
        <li><Link className={`${newPath === '/#contact' ? `${styles.activeNavLink} active` : `${styles.inActiveNavLink}`}`} href={'#contact'}>Contact</Link></li>
    </>
    return (
        <div className='bg-gray-800 text-white shadow-xl fixed w-full z-10'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 text-white rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl">SAMEON</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}