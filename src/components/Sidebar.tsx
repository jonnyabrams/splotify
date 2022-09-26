import { NavLink } from 'react-router-dom';

import { links } from "../assets/constants";

const Sidebar = () => {

  const NavLinks = () => (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        >
          <item.icon className='w-6 h-6 mr-2' />
          {item.name}
        </NavLink>
      ))}
    </div>
  )

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <span className="w-full h-14 object-contain text-white">SPLOTIFY</span>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
