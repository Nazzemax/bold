import Section from "@/src/UI/Section/Section";
import style from './ApproachSection.module.scss'

const Items = [
  {
    title: 'Погружение в ваш бизнес',
    description:
      'Анализируем рынок, изучаем конкурентов, выявляем особенности вашей целевой аудитории.',
    image: "/image/image.png",
    reverse: false,
  },
  {
    title: 'Разработка стратегии',
    description:
      'Создаем уникальную SMM-стратегию, которая выделяет ваш бренд и приносит реальные результаты.',
    image: "/image/image.png",
    reverse: true,
  },
  {
    title: 'Создание контента',
    description:
      'Креатив-команда разрабатывает визуалы и тексты, которые привлекают внимание и побуждают к покупкам.',
    image: "/image/image.png",
    reverse: false,
  },
];

const ApproachSection = () => {
  return (
    <div>
      <Section 
        title="Наш бизнес-подход"
        items={Items} // ✅ Теперь передаем корректные данные
      />
    </div>
  );
};

export default ApproachSection;
