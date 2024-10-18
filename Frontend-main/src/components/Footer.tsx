"use client";
import '../app/globals.css';
import { FaUser, FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "#",
          name: "Partners",
        },
        {
          href: "#",
          name: "Blog",
        },
        {
          href: "#",
          name: "Team",
        },
        {
          href: "#",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "#",
          name: "Contact",
        },
        {
          href: "#",
          name: "Support",
        },
        {
          href: "#",
          name: "Docs",
        },
        {
          href: "#",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "#",
          name: "Terms",
        },
        {
          href: "#",
          name: "License",
        },
        {
          href: "#",
          name: "Privacy",
        },
        {
          href: "#",
          name: "About Us",
        },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 custom-bg-hero px-4 py-5 pt-12 max-w-screen mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-2">
          <div className="max-w-xs text-center ">
            <img src="/logo.svg" className="w-[60px] mb-3" alt="FooterLogo" />
            <h2 className="block text-3xl font-semibold text-gray-900 dark:text-white">
              StatDucks
            </h2>
            <p className="leading-relaxed mt-2 text-[15px] text-white">
              Learn, Earn and Play! Win- Win For all
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-evenly sm:flex md:space-y-0 md:mt-0 mb-10">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-white font-bold">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className=" duration-300 font-medium ease-linearhover:underline hover:text-[#AFFFCF] text-[#D1D5DB] py-3"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex flex-col gap-12 centerd-form items-center">
          <form
            action="#"
            className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 dark:text-gray-400 shadow-lg shadow-gray-200/20 dark:shadow-transparent border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-full ease-linear focus-within:bg-white dark:focus-within:bg-gray-950  focus-within:border-blue-600"
          >
            <span className="min-w-max pr-2 border-r border-gray-200 dark:border-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
            </span>
            <input
              type="email"
              name=""
              id=""
              placeholder="johndoe@gmail.com"
              className="w-full py-3 outline-none bg-transparent"
            />
            <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
              <span className="hidden sm:flex relative z-[5]">Get Started</span>
              <span className="flex sm:hidden relative z-[5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </span>
            </button>
          </form>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-20 h-20 flex items-center justify-center">
                <a href="https://discord.com">
                  <FaDiscord className="w-20 h-20 text-white" />
                </a>
              </li>

              <li className="w-20 h-20 flex items-center justify-center">
                <a href="https://twitter.com">
                  <FaTwitter className="w-20 h-20 text-white" />
                </a>
              </li>

              <li className="w-20 h-20 flex items-center justify-center">
                <a href="https://linkedin.com">
                  <FaLinkedin className="w-20 h-20 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-center sm:flex">
        <div className="mt-4 sm:mt-0 text-center text-[#D1D5DB]">
          &copy; 2024 Stat Ducks All rights reserved.
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
