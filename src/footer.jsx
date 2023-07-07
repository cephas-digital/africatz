import Logo from "./components/logo";
import ButtonComponent from "./components/button";

import twitter from "./assets/twitter.png";
import messenger from "./assets/messenger.png";
import linkedin from "./assets/linkedin.png";

import ScrollIntoView from "react-scroll-into-view";
const Footer = () => {
  return (
    <>
      <footer>
        <section
          className="text-white py-10 md:px-8 lg:px-24 px-3 md:flex  justify-between"
          style={{ background: "#262626" }}
        >
          <div className="max-w-sm md:mb-0 mb-10">
            <Logo />
            <p className="my-5">
              Africartz is aspiring to emerge as the largest and most renowned
              online retailing platform for trade in Africa at large.
            </p>
            {/* <a href="https://play.google.com/store/apps/details?id=com.africartzstore.com">
              <ButtonComponent title="Get Started" />
            </a> */}
          </div>
          <nav className="flex flex-col">
            <ScrollIntoView className="py-3" selector="#home">
              <label className="hover:font-black  hover:text-primary cursor-pointer">
                Home
              </label>
            </ScrollIntoView>
            <ScrollIntoView className="py-3" selector="#contact">
              <label className="hover:font-black  hover:text-primary cursor-pointer">
                Contact
              </label>
            </ScrollIntoView>
            <ScrollIntoView className="py-3" selector="#about">
              <label className="hover:font-black  hover:text-primary cursor-pointer">
                About Us
              </label>
            </ScrollIntoView>
          </nav>
          <hr />
          <nav className="flex flex-col">
            <a className="py-3" href="https://africartz-web.vercel.app/terms-and-conditions">
              Terms of Service
            </a>
            <a className="py-3" href="mailto:africartzstore@gmail.com">
              Support
            </a>
          </nav>
          <hr />
          <nav className="flex flex-col">
            <a className="py-3" href="mailto:africartzstore@gmail.com">
              africartzstore@gmail.com
            </a>
            <a className="py-3" href="tel:+2348139797330">
              +234 813 979 7330
            </a>
          </nav>
          <nav className="flex py-3 self-start justify-between items-center">
            <a className="mr-4 text-xl" href="https://www.instagram.com/africartz/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="mr-4 text-xl" href="https://www.facebook.com/africartz" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="mr-4 text-xl" href="https://twitter.com/AfricartStore" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>

            {/* <img className="mr-4" src={linkedin} alt="linkedin" />
            <img className="mr-4" src={messenger} alt="messenger" />
            <img className="mr-4" src={twitter} alt="twitter" /> */}
          </nav>
        </section>
        <section className="bg-darkest text-white p-5 text-center">
          <tt>Copyright @ Africartz 2023. All Rights Reserved.</tt>
        </section>
      </footer>
    </>
  );
};
export default Footer;
