import Logo from "./components/logo";
import Header from "./header";
import Footer from "./footer";
import herobg from "./assets/hero_image.png";

import Services from "./services";
import About from "./about";
import Projects from "./projects";
import Testimonial from "./testimonial";
import Faqs from "./faqs";
import Contact from "./contact";

import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import shoprite from "./assets/shoprite.png";
import jumia from "./assets/jumia.png";
import ace from "./assets/ace.png";
import brent from "./assets/brent.png";

import { TypeAnimation } from "react-type-animation";

const Page = () => {
  return (
    <main className="">
      <section
        id="home"
        className="bg-darkest md:h-fit lg:h-screen py-4 px-3 md:px-8 lg:px-24 text-white"
      >
        <Header />
        <section className=" relative block md:flex py-1 justify-between items-center">
          <div className="max-w-md mt-10  ">
            <h1
              style={{ lineHeight: "3.5rem" }}
              className="font-segoe  text-xl leading-loose md:text-5xl  tracking-wide font-bold leading-loose"
            >
              <TypeAnimation
                sequence={[
                  "Fast and secure checkout process for a hassle-free shopping.",
                ]}
                speed={50}
                repeat={10}
                cursor={false}
              />
            </h1>

            <h1
              style={{ lineHeight: "3.5rem" }}
              className="bg-primary  font-segoe my-1 text-xl md:text-5xl  tracking-wide font-bold w-fit p-1 text-darker"
            >
              experience
            </h1>

            <h6 className="mb-5 font-semibold">
              Explore our wide range of products and services
            </h6>
            <section className="flex mt-10">
              <div className="flex w-40 cursor-pointer  mr-5 items-center justify-around primary-gradient p-2">
                <BsApple size={25} />
                {/* <img className="w-4" src={apple} alt="appstore" /> */}
                <div>
                  {" "}
                  <p className="text-xs">Available Now</p>
                  <h2 className="text-base font-bold">App Store</h2>
                </div>
              </div>
              <div className="flex w-40 cursor-pointer mr-5 items-center justify-around primary-gradient p-2">
                <IoLogoGooglePlaystore size={25} />

                <div>
                  {" "}
                  <p className="text-xs">Available Now</p>
                  <h2 className="text-base font-bold">Play Store</h2>
                </div>
              </div>
            </section>
          </div>
          {/* <div className=" md:-top-20 md:-right-10 top-0 relative md:absolute ">
            <img
              className="md:w-[800px] w-full "
              src={herobg}
              alt="hero_inage"
            />
          </div> */}
          <div className="  ">
            <img className=" " src={herobg} alt="hero_inage" />
          </div>
        </section>
      </section>
      <section className="py-4 px-3 md:px-8 lg:px-24 bg-secondary">
        <h1 className="text-center text-3xl my-3 font-segoe italic text-darker font-black">
          Our Top Partners
        </h1>
        {/* <marquee> */}
        <div className="flex flex-wrap items-center justify-between my-6">
          <img src={shoprite} alt="shoprite" />
          <img src={jumia} alt="jumia" />
          <img src={ace} alt="ace" />
          <img src={brent} alt="brent" />
          <img src={ace} alt="ace" />
        </div>
        {/* </marquee> */}
      </section>

      <Services />
      <About />
      <Projects />
      <Testimonial />
      <Faqs />
      <Contact />
      <section className="bg-info flex items-center justify-center py-10">
        <div className="md:w-2/5 w-full mx-auto text-center">
          <h1 className="text-4xl font-segoe font-black text-darkest">
            Download Africartz to get started
          </h1>
          <section className="flex justify-center my-6">
            <div className="flex w-40 cursor-pointer  mr-5 items-center justify-around text-white bg-darkest p-2">
              <BsApple size={35} />
              {/* <img className="w-4" src={apple} alt="appstore" /> */}
              <div>
                {" "}
                <p className="text-xs">Available Now</p>
                <h2>App Store</h2>
              </div>
            </div>
            <div className="flex w-40 cursor-pointer mr-5 items-center justify-around text-white bg-darkest p-2">
              <IoLogoGooglePlaystore size={35} />

              <div>
                {" "}
                <p>Available Now</p>
                <h2>App Store</h2>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Page;
