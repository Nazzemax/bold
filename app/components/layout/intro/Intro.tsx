'use client';

import React, { FC, ReactNode } from 'react';
import Header from '../header/Header';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import styles from './Intro.module.scss';
import Image, { StaticImageData } from 'next/image';

export interface IntroProps {
  /**
   * Page title. Accepts any React node so you can include markup (e.g., line breaks).
   */
  title?: ReactNode;
  /**
   * Callback function to be invoked when the action button is clicked.
   * The button is rendered only if both `actionText` and `onActionClick` are provided.
   */

  /**
   * Text to display on the action button.
   */
  actionText?: string;
  /**
   * Optional URL for a background image for the main container.
   */
  backgroundImage?: StaticImageData;
  /**
   * Optional extra paragraph text rendered below the title.
   * Its container has a maximum width of 652px so that if the text exceeds that width, it wraps to the next line.
   */
  extraText?: string;
}

/**
 * Intro is a reusable layout component that always includes:
 * - The Header component
 * - A Breadcrumb (always displayed)
 * - An introductory section with an optional title, an optional extra paragraph
 * 
 *
 * The `backgroundImage` prop can be used to set a custom background image for the main container.
 *
 * The extra paragraph text is rendered below the title. Its container is styled with a maximum width of 652px,
 * ensuring that text will wrap if it exceeds that width.
 *
 * Example usage:
 * ```tsx
 * <Intro
 *   title={<>Наша миссия воплощать идеи <br /> в жизнь</>}
 *   actionText="Получить консультацию"
 *   onActionClick={handleConsultationClick}
 *   backgroundImage="/images/background.jpg"
 *   extraText="Выстраиваем маркетинг как единую экосистему, чтобы от концепции до реализации — мы сопровождаем вас на каждом этапе создания вашего бренда"
 * />
 *   
 * ```
 */
const Intro: FC<IntroProps> = ({
  title,
  actionText,
  backgroundImage,
  extraText,
}) => {
//   const mainStyle = backgroundImage
//     ? {
//         backgroundImage: `url(${backgroundImage})`,
//       }
//     : {};

  return (
    <div className={styles.starter}>
        <Image width={1920} height={900} className={styles.starter} src={backgroundImage || ""} alt='main bg image'/>
      <Header />
      <div className={styles.intro}>
        <Breadcrumb />
        {title && <h1 className={styles.intro__title}>{title}</h1>}
        {extraText && <p className={styles.intro__extra}>{extraText}</p>} 
          <button className={styles.intro__consultation}>
            {actionText}
          </button>
      </div>
    </div>
  );
};

export default Intro;
