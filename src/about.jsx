import AboutImg from "./assets/section1_img.png";
import ButtonComponent from "./components/button";
const About = () => {
  return (
    <main
      id="about"
      className="py-4 my-10 px-3 md:px-8 lg:px-24  bg-darker text-white"
    >
      <div className="md:flex items-center justify-between">
        <section className="max-w-2xl">
          <h1 className="text-3xl my-3 font-segoe italic  font-black">
            About Africartz
          </h1>
          <p className="py-3 leading-relaxed tracking-wider">
            Africartz is a gigantic online Global E-commerce advertising
            platform (“App”) in Africa designed for right vendors to provide,
            advertise and sell good unrivalled quality commodities (“Products”
            “Services” “Publications”) as well as branded products that can
            cater for demand to the emerging African consumer.{" "}
          </p>{" "}
          <p className="py-3 leading-relaxed tracking-wider">
            Africartz has brought convenience and reliability to the African
            retail market by combining open thoughts with considerable market
            research. Additionally, the local vendors can also benefit from the
            improved access to a country-wide market, where they can set their
            own prices and other key details.{" "}
          </p>{" "}
          <p className="py-3 leading-relaxed tracking-wider">
            Africartz is aspiring to emerge as the largest and most renowned
            online retailing platform for trade in Africa at large. Africartz
            has decided to employ payment on delivery services. This gives
            customers the assurance and liberty that the quality of the product
            they ordered can be checked on delivery before proceeding with the
            payment.{" "}
          </p>
          <div className="my-3">
            <ButtonComponent title="Learn More" />
          </div>
        </section>
        <section>
          <img src={AboutImg} alt="product_image" />
        </section>
      </div>
    </main>
  );
};

export default About;
