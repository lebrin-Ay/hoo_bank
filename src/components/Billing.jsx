import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <article className={layout.sectionImgReverse}>
      <img src={bill} alt="Bill" className="w-full h-full relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-2/4 h-2/4 rounded-full white__gradient" />
      <div className="absolute z-[0] w-2/4 h-2/4 -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </article>

    <article className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple store"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </article>
  </section>
);

export default Billing;
