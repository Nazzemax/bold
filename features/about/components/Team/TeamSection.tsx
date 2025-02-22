import styles from "./TeamSection.module.scss";
import person_1 from "@/public/personal/rewr1.png";
import person_2 from "@/public/personal/rewr2.png";
import person_3 from "@/public/personal/rewr3.png";
import person_4 from "@/public/personal/rewr4.png";
import person_5 from "@/public/personal/rewr5.png";
import person_6 from "@/public/personal/rewr6.png";
import person_7 from "@/public/personal/rewr7.png";
import person_8 from "@/public/personal/rewr8.png";
import Image from "next/image";

const teamMembers = [
  {
    name: "Тангар Чочуков",
    role: "Генеральный директор",
    image: person_1,
  },
  { name: "Мажгим Тазабекова", role: "Бухгалтер", image: person_2 },
  { name: "Павел Мун", role: "Офис менеджер", image: person_3 },
  {
    name: "Усеналиев Шабдан",
    role: "Руководитель отдела продаж",
    image: person_4,
  },
  { name: "Эрнисова Каинкей", role: "Маркетолог", image: person_5 },
  {
    name: "Искакжанов Тилек",
    role: "Руководитель отдела дизайна",
    image: person_6,
  },
  {
    name: "Мамбетова Алия",
    role: "Руководитель отдела модерации",
    image: person_7,
  },
  {
    name: "Тазабек к. Сезим",
    role: "Главный бухгалтер",
    image: person_8,
  },
];

export const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.conteiner}>
        <div className={styles.Team_title}>
          <h2 className={styles.title}>Команда, которой можно доверять</h2>
          <p className={styles.subtitle}>
            Каждый из нас вносит уникальный вклад, помогая вашему бизнесу расти
            и процветать. Познакомьтесь с людьми, которые превращают идеи в
            реальность.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <Image
                src={member.image}
                alt={member.name}
                width={308}
                height={460}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
