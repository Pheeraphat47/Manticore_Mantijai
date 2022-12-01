import React from "react";
import './Navbar.css';
import { Anchor } from 'antd';

const { Link } = Anchor;



const Nav = () => {
    return (

        <nav className="shadow-md w-full fixed top-0 left-0 bg-gradient-to-r from-yellow-600 to-lime-700 z-10">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">                    
                    <span className="font-semibold whitespace-nowrap dark:text-white text-center text-white font-itim" id="logo">MANTICORE <br /> Mantijai</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm 500 rounded-lg md:hidden text-white" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-12 mt-12 pr-0   md:flex-row md:space-x-16 md:mt-0 md:text-sm md:font-medium md:border-0 text-xl font-inter text-white" id="navbutton">
                        <li>
                            <Link href="#boxhome" title="HOME" />
                        </li>
                        <li>
                            <Link href="#Appear" title="APPEARANCE" />
                        </li>
                        <li>
                            <Link href="#History" title="HISTORY" />
                        </li>
                        <li>
                            <Link href="#QuizComponent" title="QUIZ" />
                        </li>
                        <li>
                            <Link href="#AboutUs" title="ABOUT" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>





    );
}

export default Nav;