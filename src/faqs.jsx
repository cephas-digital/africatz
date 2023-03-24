import { FaqsData } from "./data";
import sectionImg from "./assets/section3_img.png";
import question from "./assets/question_mark.png";
import { motion } from "framer-motion";
const Faqs = () => {
  return (
    <main className="py-4  px-3 md:px-8 lg:px-24">
      <h1 className="text-center text-3xl my-3 font-segoe italic text-darker font-black">
        FAQs
      </h1>
      <h5 className="text-center text-base font-normal text-darker my-10">
        .Have a question about using our App or on anything? We’ve got you
        covered! Check out our FAQs for more information.{" "}
      </h5>
      <div className="md:flex justify-between items-center">
        <section className="max-w-xl">
          {FaqsData.map((data) => {
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
              >
                <h1 className="font-bold text-md font-nunito  my-2">
                  {data.question}
                </h1>
                <p
                  style={{ color: "rgba(27, 27, 27, 0.9)" }}
                  className="font-nunito py-2"
                >
                  {data.answer}
                </p>
              </motion.div>
            );
          })}
        </section>
        <section className="relative">
          <img src={sectionImg} alt="Faq Image" />
          <img
            className="absolute w-28 top-0 right-8"
            src={question}
            alt="Faq Image"
          />
        </section>
      </div>
    </main>
  );
};

export default Faqs;
