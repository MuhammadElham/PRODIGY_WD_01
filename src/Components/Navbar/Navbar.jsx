import React from "react";

const Navbar = () => {
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blog",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container">
          {/* Logo and Links Section */}
          <div>
            <a
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#"
            >
              {" "}
              eshop
            </a>
          </div>
          {/* Menu Item */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a href={data.link}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Side of Logo */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
