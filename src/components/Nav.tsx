"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="max-w-7xl w-full mx-auto overflow-x-clip flex flex-row items-center justify-center px-5 py-3">
      <div className="max-sm:hidden justify-end w-full links nav-page-links flex flex-row gap-14">
        <Link className="hover:text-yellow-400" href="/">
          About us
        </Link>
        <Link className="hover:text-yellow-400" href="/portfolio">
          Portfolio
        </Link>
        <Link className="text-black mix-blend-difference hover:bg-white bg-yellow-300 px-5 rounded-full" href="/#contact">
          Contact Us
        </Link>
      </div>

      <Link
        href="tel:+445555555555"
        className="sm:hidden text-white w-full flex justify-center hover:text-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" />
        </svg>
      </Link>

      <Link href="/" className="flex flex-shrink-0 h-11 w-auto gap-2">
        <Image
          src="/assets/images/elleo.svg"
          alt="ELLEO LTD"
          width={150}
          height={150}
        />
      </Link>

      <Link
        href="mailto:contact-us@elleo.com"
        className="sm:hidden text-white w-full flex justify-center hover:text-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0"
        >
          <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
          <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
        </svg>
      </Link>

      <div className="max-sm:hidden w-full justify-start nav-contact-info flex-column gap-">
        <Link
          href="tel:+445555555555"
          className="flex flex-row gap-2 hover:text-yellow-400 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 flex-shrink-0"
          >
            <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" />
          </svg>
          <h1>05555 555555</h1>
        </Link>

        <Link
          href="mailto:contact-us@elleo.com"
          className="flex items-center flex-row gap-2 hover:text-yellow-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 flex-shrink-0"
          >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          <h1>contact-us@elleo.com</h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
