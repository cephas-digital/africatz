import { servicesDetails } from "./data";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <main className="py-4 my-10 px-3 md:px-8 lg:px-24">
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
      >
        <motion.h1 className="text-center text-3xl my-3 font-segoe italic text-darker font-black">
          Our Services
        </motion.h1>
        <p className="text-center text-darker text-base">
          Africartz is divided into several categories which include “Afrimenu”,
          “Afribooking”, “Afripay”, “Afripro”. Description on each service is
          stated below.
        </p>
      </motion.div>
      <section className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {servicesDetails.map((data, index) => {
          return (
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50,
                mass: 0.8,
              }}
              style={{ border: "1px solid #CCCCCC" }}
              className={` ${
                index % 2 !== 0 ? "bg-dark text-white " : "bg-white text-darker"
              }  p-5 tracking-widest leading-loose `}
            >
              <img className="block my-4" src={data.img} alt={data.title} />
              <h1 className="font-segoe font-bold text-xl">{data.title}</h1>
              <p className="font-rubik my-3 font-normal text-sm leading-relaxed tracking-wide">
                {data.content}
              </p>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
};
export default Services;
