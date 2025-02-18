import React from 'react';
import ApproachSection from '@/src/UI/Section/Section';

import dataMigrationImage from '@/public/image/dataMigration.png';
import processAutomationImage from '@/public/image/processAutomation.png';
import supportTrainingImage from '@/public/image/supportTraining.png';
import imageApproach from '@/public/image/image.png'


const CRMIntegration = () => {
  const itemsssss = [
    {
      title: 'Выбор и настройка CRM-системы',
      description:
        'Подберем наиболее подходящий CRM для вашего бизнеса. Настроим необходимые функции для вашего удобства.',
      image: imageApproach,
      reverse: false,
    },
    {
      title: 'Миграция данных',
      description:
        'Обеспечим перенос данных с сохранением их целостности и структуры.',
      image: imageApproach,
      reverse: true,
    },
    {
      title: 'Автоматизация процессов',
      description:
        'Настроим автоматизацию основных процессов с использованием CRM для экономии времени и увеличения эффективности.',
      image: imageApproach,
      reverse: false,
    },
    {
      title: 'Обучение и поддержка',
      description:
        'Обучим сотрудников работе с CRM и обеспечим круглосуточную поддержку.',
      image: imageApproach,
      reverse: true,
    },
  ];

  return (
    <div>
      <ApproachSection
        title="Наши услуги по интеграции CRM"
        items={itemsssss}
      />
    </div>
  );
};

export default CRMIntegration;
