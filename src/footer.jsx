import Logo from "./components/logo";
import ButtonComponent from "./components/button";

import twitter from "./assets/twitter.png";
import messenger from "./assets/messenger.png";
import linkedin from "./assets/linkedin.png";
const Footer = () => {
  return (
    <>
      <footer>
        <section
          className="text-white py-10 md:px-24 px-3 md:flex  justify-between"
          style={{ background: "#262626" }}
        >
          <div className="max-w-sm">
            <Logo />
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipiscin eli a sit
              facilisis volutpat interdum non a magna tempus amet velit dolor
              sit.
            </p>
            <ButtonComponent title="Get Started" />
          </div>
          <nav className="flex flex-col">
            <a className="py-3" href="#">
              About Us
            </a>
            <a className="py-3" href="#">
              Contact
            </a>
          </nav>
          <nav className="flex flex-col">
            <a className="py-3" href="#">
              Terms of Service
            </a>
            <a className="py-3" href="#">
              Privacy
            </a>
          </nav>
          <nav className="flex flex-col">
            <a className="py-3" href="#">
              africartz@gmail.com
            </a>
            <a className="py-3" href="#">
              +234 111 222 333
            </a>
          </nav>
          <nav className="flex py-3 self-start justify-between items-center">
            <img className="mr-4" src={linkedin} alt="linkedin" />
            <img className="mr-4" src={messenger} alt="messenger" />
            <img className="mr-4" src={twitter} alt="twitter" />
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
