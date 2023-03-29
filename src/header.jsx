import Logo from "./components/logo";
import ButtonComponent from "./components/button";
import { GiCancel } from "react-icons/gi";
import ScrollIntoView from "react-scroll-into-view";

import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="md:flex hidden items-center justify-between">
        <div className="flex  z-10 items-center p-2 basis-2/5 justify-between ">
          <Logo />
          <ScrollIntoView selector="#home">
            <label className="hover:font-black hover:text-primary cursor-pointer">
              Home
            </label>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact">
            <label className="hover:font-black hover:text-primary cursor-pointer">
              Contact
            </label>
          </ScrollIntoView>
          <ScrollIntoView selector="#about">
            <label className="hover:font-black hover:text-primary cursor-pointer">
              About Us
            </label>
          </ScrollIntoView>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.africartzstore.com">
          <ButtonComponent title="Get started" mode="light" />
        </a>
      </header>
      <header className="md:hidden flex  items-center justify-between">
        <Logo />
        <ButtonComponent title="Get started" mode="light" />
        <div className="top-1/2 fixed z-10 pr-5 bg-primary rounded-full p-2 -right-4">
          <GiCancel onClick={() => setOpen(!open)} color="white" />
        </div>
        <aside
          className={` ${
            open ? "mobile-nav__open" : "mobile-nav__close"
          }   z-10  bg-darkest`}
        >
          <div className="text-xl flex  h-[100vh] leading-loose tracking-widest flex-col items-center justify-center font-black font-rubik">
            <div onClick={() => setOpen(!open)} className="my-4">
              {" "}
              <ScrollIntoView selector="#home">Home</ScrollIntoView>
            </div>
            <div onClick={() => setOpen(!open)} className="my-4">
              <ScrollIntoView selector="#contact">Contact</ScrollIntoView>
            </div>
            <div onClick={() => setOpen(!open)} className="my-4">
              {" "}
              <ScrollIntoView selector="#about">About Us</ScrollIntoView>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};
export default Header;
