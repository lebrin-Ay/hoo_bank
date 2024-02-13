import styles from "../style";
import { discount, robot } from "../assets/index";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`${styles.paddingY} flex md:flex-row flex-col `}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[.375rem] px-4 bg-discount-gradient rounded-[.625rem] mb-2">
        <img src={discount} alt="Discount" className="w-8 h-8" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="text-white font-poppins font-semibold ss:text-[4.25rem] ss:leading-[6.25rem] text-[3.25rem] leading-[75px] w-full">
        Payment Method.
      </h1>

      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`${styles.flexCenter} flex flex-1 md:my-0 my-10 relative`}>
      <img src={robot} alt="" className="w-full h-full relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] rounded-full right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
