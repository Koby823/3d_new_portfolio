import klogo from "../assets/logo-no-background.png";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex justify-between w-5/6 py-5">
        <div className="flex">
          <img src={klogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[18px] font-bold cursor-pointer flex mt-1">Koby</p>
        </div>
        <ul className="list-none flex flex-row gap-4 m-1.5">
          <li className=" hover:origin-top font-bold hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text hover:animate-text-gr cursor-pointer">
            About
          </li>
          <li className="font-bold">Works</li>
          <li className="font-bold">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
