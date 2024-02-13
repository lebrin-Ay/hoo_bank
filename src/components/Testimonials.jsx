import { feedback } from "../constants/index";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    {/* gradient */}
    <div className="absolute -right-[50%] z-[0] w-[60%] h-[60%] blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row mb-6 sm:mb-16 relative z-[1]">
    <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
    <div>
      <p className={`${styles.paragraph} text-left max-w-[470px]`}>
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    </section>
  )
}

export default Testimonials