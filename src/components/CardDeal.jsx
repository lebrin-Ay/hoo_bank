import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
  <article className={layout.sectionInfo}>
   <h2 className={`${styles.heading2}`}>
    Find a better card deal <br className="sm:block hidden" /> in a few easy steps.
   </h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

   <Button styles="mt-10" />
  </article>

  <article className={layout.sectionImg}>
   <img src={card} alt="Card" className="w-full h-full"/>
  </article>
  </section>
);


export default CardDeal;