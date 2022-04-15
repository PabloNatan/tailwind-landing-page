import React from "react";
import logo from "assets/logo-white.svg";
import Image from "next/image";
import Container from "components/Container";

const Footer = () => {
  const iconsLinks = [
    {
      alt_text: "Facebook Icon",
      image_url: "/img/icon-facebook.svg",
      url: "https://www.facebook.com",
    },
    {
      alt_text: "Youtube Icon",
      image_url: "/img/icon-youtube.svg",
      url: "https://www.youtube.com",
    },
    {
      alt_text: "Twitter Icon",
      image_url: "/img/icon-twitter.svg",
      url: "https://twitter.com",
    },
    {
      alt_text: "Pinterest Icon",
      image_url: "/img/icon-pinterest.svg",
      url: "https://br.pinterest.com/",
    },
    {
      alt_text: "Instagram Icon",
      image_url: "/img/icon-instagram.svg",
      url: "https://www.instagram.com",
    },
  ];

  const siteMap = [
    { title: "Home", url: "#" },
    { title: "Pricing", url: "#" },
    { title: "Products", url: "#" },
    { title: "Abouts", url: "#" },
    { title: "Careers", url: "#" },
    { title: "Community", url: "#" },
    { title: "Privacy Policy", url: "#" },
  ];
  return (
    <div className="bg-veryDarkBlue flex justify-between px-6 py-16">
      <div className="flex flex-col justify-between">
        <div>
          <Image src={logo} alt="Manage logo" width="200px" height="40" />
        </div>

        <ul className="flex space-x-4">
          {iconsLinks.map(({ image_url, url, alt_text }) => (
            <li key={image_url}>
              <a href={url} target="_blank" rel="noreferrer">
                <Image src={image_url} alt={alt_text} width="30" height="30" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid grid-cols-2 w-1/4">
        {siteMap.map(({ title, url }) => (
          <a
            className="text-white p-1 hover:text-brightRed transition duration-300"
            key={title}
            href={url}
          >
            {title}
          </a>
        ))}
      </ul>

      <div className="flex flex-col justify-between">
        <div className="flex space-x-4 h-10">
          <input
            type="text"
            className="rounded-xl pl-3"
            placeholder="Updated in your inbox"
          />
          <button className="btn-primary px-6 py-1">Go</button>
        </div>
        <p className="text-white">Copyright © 2022, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
