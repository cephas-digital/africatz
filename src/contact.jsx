import ButtonComponent from "./components/button";
import { ContactData } from "./data";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <main id="contact" className="py-4 bg-secondary px-3 md:px-8 lg:px-24">
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
        <h1 className="text-center text-3xl my-3 font-segoe italic text-darker font-black">
          Contact Us
        </h1>
        <h5 className="text-center text-base font-normal text-darker my-10">
          Your satisfaction is our top priority. Contact us if there's anything
          we can do to make your experience with us even better.
        </h5>
      </motion.div>
      <form>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ContactData.map((data) => {
            return (
              <div className="flex md:my-5 my-2 flex-col">
                <label className="font-nunito font-semibold">
                  {data.title}
                </label>
                <input
                  className="rounded-md my-2 p-2"
                  style={{
                    border: "1px solid #CCCCCC",
                    background:
                      "linear-gradient(180deg, #FAFBC5 0%, rgba(250, 251, 197, 0.8) 100%)",
                  }}
                  placeholder={data.placeholder}
                  type={data.type}
                />
              </div>
            );
          })}
        </section>
        <div className="flex justify-center">
          <ButtonComponent title="Submit" _style="dark_shadow bg-primary " />
        </div>
      </form>
    </main>
  );
};

export default Contact;
