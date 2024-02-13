import { stats } from "../constants/index";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
   {stats.map((stat) => (
    <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
     <h3 className="font-poppins font-semibold text-3xl xs:text-3xl xs:leading-[53px] text-white">{stat.value}</h3>
     <p className="font-poppins font-normal text-sm xs:text-xl xs:leading-[26px] text-gradient uppercase ml-3">{stat.title}</p>
    </div>
   ))}
  </section>
)


export default Stats