import Logo from "./components/logo";
import Header from "./header";
import Footer from "./footer";
import herobg from "./assets/hero_image.png";
import blur_light from "./assets/blur_light.png";

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
import { motion } from "framer-motion";

const Page = () => {
  return (
    <main className="">
      <section
        id="home"
        className="bg-darkest md:h-fit lg:h-screen py-4 px-3 md:px-8 lg:px-24 text-white"
      >
        <Header />
        <section className=" relative block md:flex py-1 justify-between items-center">
          <div className="md:max-w-xl w-full mt-10  ">
            <motion.h1
              // style={{ lineHeight: "4.5rem" }}
              initial={{ scaleX: 0.5, scaleY: 0.3, opacity: 0.3 }}
              animate={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              className="font-nunito  text-3xl leading-snug md:text-5xl   font-medium "
            >
              Fast and secure checkout process for a hassle-free shopping
            </motion.h1>

            <h1 className="font-poppins mb-10  text-4xl leading-tight md:text-5xl  tracking-wide font-bold leading-loose bg-primary p-0.5 w-fit">
              experience
            </h1>

            <p className="my-5 font-poppins text-sm tracking-widest leading-loose font-normal">
              Explore our wide range of products and services
            </p>
            <section className="flex my-20 md:my-10">
              <div className="flex md:w-40 w-32 cursor-pointer  mr-5 items-center justify-around primary-gradient p-1 md:p-2">
                <BsApple size={25} />
                {/* <img className="w-4" src={apple} alt="appstore" /> */}
                <div>
                  {" "}
                  <p className="text-xs">Available Now</p>
                  <h2 className="text-base font-medium">App Store</h2>
                </div>
              </div>
              <div className="flex md:w-40 w-32 cursor-pointer mr-5 items-center justify-around primary-gradient p-1 md:p-2">
                <IoLogoGooglePlaystore size={25} />

                <div>
                  {" "}
                  <p className="text-xs">Available Now</p>
                  <h2 className="text-base font-medium">Play Store</h2>
                </div>
              </div>
            </section>
          </div>

          <div className=" relative    ">
            <motion.img
              initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
              whileInView={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              className="z-50"
              src={herobg}
              alt="hero_image"
            />
            <img
              className="absolute  z-10 -left-20 -bottom-20"
              src={blur_light}
              alt="blur_light"
            />
          </div>
        </section>
      </section>
      <section className="py-2 px-3 md:px-8 lg:px-24 bg-secondary">
        <motion.h1
          initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 50,
            mass: 0.8,
          }}
          className="text-center text-3xl my-2 font-segoe italic text-darker font-black"
        >
          Our Top Partners
        </motion.h1>
        <marquee>
          <div className="flex flex-wrap items-center justify-between my-6">
            <img className="md:w-auto w-12" src={shoprite} alt="shoprite" />
            <img className="md:w-auto w-12" src={jumia} alt="jumia" />
            <img className="md:w-auto w-12" src={ace} alt="ace" />
            <img className="md:w-auto w-12" src={brent} alt="brent" />
            <img className="md:w-auto w-12" src={ace} alt="ace" />
          </div>
        </marquee>
      </section>

      <Services />
      <About />
      <Projects />
      <Testimonial />
      <Faqs />
      <Contact />
      <section className="bg-info flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
            type: "spring",
            stiffness: 50,
            mass: 0.8,
          }}
          className="md:w-2/5 w-full mx-auto text-center"
        >
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
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};
export default Page;
