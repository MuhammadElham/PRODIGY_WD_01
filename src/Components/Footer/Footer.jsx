import React from "react";

const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pt-5 pb-20">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#"
            >
              {" "}
              eshop{" "}
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              voluptatum quidem impedit consequatur nostrum?
            </p>
            <p className="text-gray-500 mt-4">
              Made with 💖 by The Coding Journey
            </p>
            <a
              href="https://flourishing-cassata-cdabad.netlify.app/"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 text-sm rounded-full mt-4 cursor-pointer hover:scale-105 duration-300 relative z-10"
            >
              Visit my Portfolio
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* 1 Column */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data,index)=>(
                    <li key={index}>
                        <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300">
                            {data.title}
                        </a>
                    </li>
                ))}
              </ul>
            </div>
            {/* 2 Column */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data,index)=>(
                    <li key={index}>
                        <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300">
                            {data.title}
                        </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
