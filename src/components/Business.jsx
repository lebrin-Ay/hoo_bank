/* eslint-disable react/prop-types */
import { features } from "../constants/index";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index}) => (
  <div className={` flex flex-row p-6 rounded-[20px] ${index === features.length -1} ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="Icon" className="w-3/6 h-3/6 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
     <h4 className="font-poppins font-semibold text-lg leading-[23px] mb-1 text-white">{title}</h4>
     <p className="font-poppins font-normal text-base leading-6 mb-1 text-dimWhite">{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section className={layout.section} id="features">
     <article className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" />  we&apos;ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Button styles="mt-10" />
     </article>

     <article className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key ={feature.id} {...feature} index={index} />
      ))}
     </article>
    </section>
  )
}

export default Business