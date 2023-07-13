import React, { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  link: string;
}[];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);

  const menuItems: MenuItem = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "menu",
      link: "#",
    },
    {
      id: 3,
      name: "about",
      link: "#",
    },
    {
      id: 4,
      name: "contact",
      link: "#",
    },
  ];

  const menu = menuItems.map((item) => (
    <a
      href={item.link}
      key={item.id}
      className="mx-2 py-2 px-4 rounded-lg capitalize hover:bg-gray-400 text-white cursor-pointer hidden md:block"
    >
      {item.name}
    </a>
  ));

  return (
    <div className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-700 text-white py-6 px-8 rounded-xl mb-20">
        <div className="logo">logo</div>
        <div className="menu flex items-center">{menu}</div>

        {/* //actions  */}
        <div className="actions gap-2 hidden md:flex">
          <button className="bg-slate-200 text-black py-1 px-4 rounded-xl hover:bg-gray-600 hover:text-white">
            SignUp
          </button>
          <button className="bg-slate-200 text-black py-1 px-4 rounded-xl hover:bg-gray-600 hover:text-white">
            SignIn
          </button>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="actions-moble block md:hidden bg-transparent hover:bg-slate-400 text-black px-4 py-2 rounded-xl"
        >
          I
        </button>
      </div>
    </div>
  );
}

export default Navbar;
