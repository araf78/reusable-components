import React from "react";

type MenuItem = {
  id: number;
  name: string;
  link: string;
};

function Navbar() {
  const menuItems: MenuItem[] = [
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
    <div
      key={item.id}
      className="mx-2 py-2 px-4 rounded-lg capitalize hover:bg-gray-400 text-white cursor-pointer"
    >
      {item.name}
    </div>
  ));

  return (
    <div className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-700 text-white py-6 px-8 rounded-xl mb-20">
        <div className="logo">logo</div>
        <div className="menu flex items-center">{menu}</div>
        <div className="actions flex gap-2">
          <button className="bg-slate-200 text-black py-2 px-4 rounded-xl hover:bg-gray-600 hover:text-white">
            SignUp
          </button>
          <button className="bg-slate-200 text-black py-2 px-4 rounded-xl hover:bg-gray-600 hover:text-white">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
