import { TestimonialsData } from "./data";
import { motion } from "framer-motion";
import { RxAvatar } from "react-icons/rx";
const Testimonials = () => {
  return (
    <main className="py-10 bg-darker text-white my-10 px-3 md:px-8 lg:px-24">
      <div className="md:flex items-center justify-between">
        <h1 className="md:text-3xl text-xl text-center md:text-start my-5  font-segoe font-bold">
          Our Customers Speaks
        </h1>
        <section className="flex flex-wrap lg:w-[85vw] md:w-[100vw] md:flex-row flex-col items-center justify-center md:justify-between text-darker  ">
          {TestimonialsData.map((data, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 50,
                  mass: 0.8,
                }}
                style={{ boxShadow: "0px 20px 50px rgba(244, 158, 17, 0.3)" }}
                className="md:w-56 my-2 md:my-0 w-full text-sm text-darker font-nunito tracking-wider mx-auto bg-white p-5"
              >
                <p className="text-sm font-bold tracking-wide leading-relaxed ">
                  {data.content}
                </p>
                <div className="flex my-4 justify-between items-center">
                  <RxAvatar size={30} />
                  {/* <img src={data.img} alt={data.username} /> */}
                  <div>
                    <h2>{data.username}</h2>
                    {/* <h2>{data.userTitle}</h2> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </main>
  );
};
export default Testimonials;
