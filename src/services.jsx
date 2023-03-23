import { servicesDetails } from "./data";
const Services = () => {
  return (
    <main className="py-4 my-10 px-3 md:px-8 lg:px-24">
      <h1 className="text-center text-3xl my-3 font-segoe italic text-darker font-black">
        Our Services
      </h1>
      <p className="text-center text-darker text-base">
        Africartz is divided into several categories which include “Afrimenu”,
        “Afribooking”, “Afripay”, “Afripro”. Description on each service is
        stated below.
      </p>
      <section className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {servicesDetails.map((data, index) => {
          return (
            <div
              style={{ border: "1px solid #CCCCCC" }}
              className={` ${
                index % 2 !== 0 ? "bg-dark text-white" : "bg-white text-darker"
              }  p-5 `}
            >
              <img className="block my-4" src={data.img} alt={data.title} />
              <h1 className="font-segoe font-bold text-xl">{data.title}</h1>
              <p className="font-rubik my-3 font-normal text-sm leading-relaxed tracking-wide">
                {data.content}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default Services;
