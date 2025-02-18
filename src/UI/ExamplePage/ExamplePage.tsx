import React from "react";
import BusinessResults from "@/src/components/BusinessResults/BusinessResults";
import imageResults from "@/public/image/image79.png";
import iconBrain from "@/public/image/Frame793369.png";

const ExamplePage = () => {
  return (
    <div>
      <BusinessResults
        title="Наш подход  к интеграции CRM"
        description="Мы анализируем потребности вашего бизнеса и подбираем подходящую CRM-систему, которая соответствует вашим целям. Наша команда выполняет плавную миграцию данных и настраивает систему так, чтобы она полностью поддерживала ваши бизнес-процессы."
        philosophyTitle="Мы также обучаем вашу команду "
        philosophyText="и предоставляем регулярную техническую поддержку для удобного использования CRM."
        icon={iconBrain}
        image={imageResults}
      />

      {/* Можно повторно использовать компонент с другими данными */}
      <BusinessResults
        title="Оптимизация бизнес-процессов"
        description="Помогаем компаниям находить эффективные решения для роста и автоматизации работы."
        philosophyTitle="Наш подход"
        philosophyText="Разрабатываем индивидуальные стратегии, которые повышают продуктивность команды."
        icon={iconBrain}
        image={imageResults}
      />
    </div>
  );
};

export default ExamplePage;
