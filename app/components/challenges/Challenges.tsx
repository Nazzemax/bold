import styles from "./Challenges.module.scss";
import Image from "next/image";
import icon1 from "@/public/challenges/icon_1.svg";
import icon2 from "@/public/challenges/icon_2.svg";
import icon3 from "@/public/challenges/icon_3.svg";
import icon4 from "@/public/challenges/icon_4.svg";
import icon5 from "@/public/challenges/icon_5.svg";
import icon6 from "@/public/challenges/icon_6.svg";

interface ChallengesProps {}

const Challenges: React.FC<ChallengesProps> = () => {
  return (
    <div className={styles.challenges}>
      <div className={styles.container}>
        <h1 className={styles.challenges__title}>
          Что мешает вашему бизнесу расти?
        </h1>

        <div className={styles.challenges__cards}>
          {/* 1 */}

          <div className={styles.challenges__col1}>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon1} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Отсутствие маркетинговой стратегии
              </h3>

              <p className={styles.challenges__cardDescription}>
                Без четкого плана результаты будут хаотичными.
              </p>

              <p className={styles.challenges__cardDescription}>
                Мы разработаем индивидуальную стратегию для вашего бизнеса,
                чтобы достичь конкретных целей.
              </p>
              <span className={styles.challenges__RightCircle}></span>
            </div>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon2} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Низкие продажи и недостаток клиентов
              </h3>

              <p className={styles.challenges__cardDescription}>
                Продолжаете вкладываться в бизнес, но продажи не растут?
              </p>

              <p className={styles.challenges__cardDescription}>
                Мы привлечем новых клиентов и увеличим выручку с помощью
                проверенных маркетинговых стратегий.
              </p>
              <span className={styles.challenges__LeftCircle}></span>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.challenges__col2}>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon3} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Неэффективная реклама и перерасход бюджета
              </h3>

              <p className={styles.challenges__cardDescription}>
                Вы тратите деньги на рекламу, но не видите результата?
              </p>

              <p className={styles.challenges__cardDescription}>
                Мы оптимизируем рекламные кампании так, чтобы каждый вложенный
                цент приносил максимум-результат.
              </p>
              <span className={styles.challenges__RightCircle}></span>
            </div>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon4} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Низкая узнаваемость бренда
              </h3>

              <p className={styles.challenges__cardDescription}>
                Ваш бренд не привлекает внимание клиентов?
              </p>

              <p className={styles.challenges__cardDescription}>
                Мы сделаем его заметным, увеличив лояльность клиентов и улучшив
                узнаваемость на рынке.
              </p>
              <span className={styles.challenges__LeftCircle}></span>
            </div>
          </div>
          {/* 3 */}
          <div className={styles.challenges__col3}>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon5} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Слабое <br /> онлайн-присутствие
              </h3>

              <p className={styles.challenges__cardDescription}>
                Не хватает видимости в интернете?
              </p>

              <p className={styles.challenges__cardDescription}>
                Мы усилим ваше присутствие в цифровом пространстве: улучшим
                сайт, развиваем соцсети и другие онлайн-каналы
              </p>
              <span className={styles.challenges__RightCircle}></span>
            </div>
            <div className={styles.challenges__card}>
              <div className={styles.challenges__cardIcon}>
                <Image height={48} src={icon6} alt="icon" />
              </div>

              <h3 className={styles.challenges__cardTitle}>
                Нехватка времени и ресурсов для маркетинга
              </h3>

              <p className={styles.challenges__cardDescription}>
                Управляете бизнесом и нет времени разбираться в маркетинге?
              </p>

              <p className={styles.challenges__cardDescription}>
                Доверьте маркетинг нам, и вы сможете сосредоточиться на развитии
                бизнеса.
              </p>
              <span className={styles.challenges__LeftCircle}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
