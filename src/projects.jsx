import sectionImg2 from "./assets/section2_img.png";
import curve from "./assets/curve.png";
import { ProjectData } from "./data";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <main className="py-4 px-3 md:px-8 lg:px-24">
      <div className="md:flex items-center justify-between">
        <section className="relative  ">
          <img
            className="w-96 h-[616px]"
            src={sectionImg2}
            alt="project details"
          />
          <img
            className="absolute scale-95 h-[600px] top-0"
            src={curve}
            alt="curve"
          />
        </section>
        <section className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.3, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1.0, scaleY: 1 }}
          >
            <h1 className="text-3xl my-3 font-segoe italic  font-black">
              Used and trusted by a community of millions
            </h1>
            <p className="font-nunito font-semibold leading-loose tracking-wider">
              At <span className="text-primary">Africartz</span> , we're more
              than just a retailer - we're a community of like-minded
              individuals who love quality products and great service.
            </p>
          </motion.div>
          <section className="flex flex-wrap justify-between  md:max-w-md">
            {ProjectData.map((data) => {
              return (
                <div className="flex p-3 my-3 w-40 md:w-48 h-24 flex-col shadow-lg items-center justify-center">
                  <h1 className="font-segoe text-2xl text-darkest font-bold">
                    {data.value}
                  </h1>
                  <h5 className="my-2 text-sm font-bold">{data.title}</h5>
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </main>
  );
};

export default Projects;
