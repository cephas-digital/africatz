import AboutImg from "./assets/section1_img.png";
import ButtonComponent from "./components/button";
import { motion } from "framer-motion";
const About = () => {
  return (
    <main
      id="about"
      className="py-4 my-10 px-3 md:px-8 lg:px-24  bg-darker text-white"
    >
      <div className="md:flex items-center justify-between">
        <section className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
            className="text-3xl my-3 font-segoe italic  font-black"
          >
            About Africartz
          </motion.h1>
          <div className="font-nunito font-light text-sm">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              className="py-3 leading-relaxed tracking-wider"
            >
              Africartz is a gigantic online Global E-commerce advertising
              platform (“App”) in Africa designed for right vendors to provide,
              advertise and sell good unrivalled quality commodities (“Products”
              “Services” “Publications”) as well as branded products that can
              cater for demand to the emerging African consumer.{" "}
            </motion.p>
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              className="py-3 leading-relaxed tracking-wider"
            >
              Africartz has brought convenience and reliability to the African
              retail market by combining open thoughts with considerable market
              research. Additionally, the local vendors can also benefit from
              the improved access to a country-wide market, where they can set
              their own prices and other key details.{" "}
            </motion.p>{" "}
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              className="py-3 leading-relaxed tracking-wider"
            >
              Africartz is aspiring to emerge as the largest and most renowned
              online retailing platform for trade in Africa at large. Africartz
              has decided to employ payment on delivery services. This gives
              customers the assurance and liberty that the quality of the
              product they ordered can be checked on delivery before proceeding
              with the payment.{" "}
            </motion.p>
          </div>
          <div className="my-3">
            <ButtonComponent title="Learn More" />
          </div>
        </section>
        <section>
          <motion.img
            initial={{ x: " -1000px" }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50,
              mass: 0.8,
            }}
            src={AboutImg}
            className="md:block hidden"
            alt="product_image"
          />
          <motion.img
            initial={{ scaleX: -0.5, scaleY: -0.5 }}
            whileInView={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50,
              mass: 0.8,
            }}
            src={AboutImg}
            className="md:hidden block"
            alt="product_image"
          />
        </section>
      </div>
    </main>
  );
};

export default About;
