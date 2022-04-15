import Image from "next/image";
import React, { useRef } from "react";
import logo from "assets/logo.svg";
import CustomLink from "components/CustomLink";
import Container from "components/Container";
const Navbar = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleButtonClick() {
    buttonRef.current?.classList.toggle("open");
    navRef.current?.classList.toggle("-translate-y-80");
  }
  return (
    <Container>
      <nav className="flex justify-between items-center relative">
        <Image src={logo} alt="Manage logo" className="h-30 min-w-min" />

        <ul
          ref={navRef}
          className="nav-mobile md:space-x-4 lg:space-x-8 md:nav-desktop -translate-y-80 md:translate-y-0"
        >
          <li>
            <CustomLink path="#pricing">Princing</CustomLink>
          </li>
          <li>
            <CustomLink path="#product">Product</CustomLink>
          </li>
          <li>
            <CustomLink path="#about-us">About Us</CustomLink>
          </li>
          <li>
            <CustomLink path="#careers">Careers</CustomLink>
          </li>
          <li>
            <CustomLink path="#community">Community</CustomLink>
          </li>
        </ul>

        <button className="hidden md:block btn-primary px-6 py-2">
          Get Started
        </button>

        {/* Hamburger Icon  */}
        <button
          ref={buttonRef}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={handleButtonClick.bind(this)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
