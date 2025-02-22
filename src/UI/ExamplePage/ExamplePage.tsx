import React from "react";
import BusinessResults from "@/src/components/BusinessResults/BusinessResults";
import imageResults from "@/public/image/image79.png";
import iconBrain from "@/public/image/Frame793369.png";
import iconBrain1 from "@/public/image/Frame79336.png";
import videoThumbnail from "@/public/image/video-thumbnail.png";

export const ExamplePage1 = () => {
  return (
    <div>
      <BusinessResults
        title="Наш подход к интеграции CRM"
        description="Мы анализируем потребности вашего бизнеса и подбираем подходящую CRM-систему, которая соответствует вашим целям. Наша команда выполняет плавную миграцию данных и настраивает систему так, чтобы она полностью поддерживала ваши бизнес-процессы."
        philosophyTitle="Мы также обучаем вашу команду"
        philosophyText="и предоставляем регулярную техническую поддержку для удобного использования CRM."
        icon={iconBrain}
        image={imageResults}
      />
    </div>
  );
};


export const ExamplePage2 = () => {
  return (
    <div>
      <BusinessResults
        title="Комплексное маркетинговое сопровождение"
        description="это стратегический подход, который помогает бизнесу не просто заявить о себе, а достичь реальных результатов: увеличить продажи, расширить клиентскую базу и укрепить позиции на рынке.         "
        philosophyTitle="В Bold Brands мы:"
        philosophyText="объединяем все ключевые инструменты цифрового маркетинга в единую экосистему, чтобы вы получили максимум отдачи от каждого вложенных средств."
        icon={iconBrain}
        image={imageResults}
      />
    </div>
  );
};

export const ExamplePage3 = () => {
  return (
    <div>
    <BusinessResults
      title="Креатив, который выделяет ваш бренд"
      description="С более чем 10-летним опытом в видеопродакшн, наша команда профессионалов создает видеоролики, которые не только привлекают внимание, но и эффективно достигают ваших бизнес-целей."
      philosophyTitle="В Bold Brands мы уверены:"
      philosophyText="Качественный видеоконтент — это ключ к успешному продвижению вашего бизнеса."
      icon={iconBrain1}
      image={videoThumbnail} 
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    />
  </div>
  );
};
