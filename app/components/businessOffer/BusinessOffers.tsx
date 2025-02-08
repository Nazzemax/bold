import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './BusinessOffers.module.scss';

/**
 * Props for the BusinessOffers component.
 */
interface TemplateProps {
    /** The main title displayed prominently in the component. */
    title: string;
    /** A title intended for the left section; currently not utilized. */
    leftTitle: string;
    /** An optional subtitle providing additional context beneath the main title. */
    subtitle?: string;
    /** Text content displayed in the left section under "Наши эксперты" (Our Experts). */
    leftText: string;
    /** Text content displayed in the right section, associated with the main title. */
    rightText: string;
    /** Source for the icon image representing design or business concepts. */
    icon: StaticImageData | string;
    /** Flag indicating whether to display a video instead of an image in the right section. */
    hasVideo?: boolean;
    /** Source for the image to be displayed if `hasVideo` is false. Defaults to a placeholder if not provided. */
    image?: StaticImageData | string;
    /** Flag that, if true, applies a CSS class to style the left text with a downward shift. */
    leftTextDown?: boolean;
    /** Flag that, if true, applies a CSS class to style the right text with a downward shift. */
    rightTextDown?: boolean;
}

/**
 * A React functional component that displays business-related information,
 * including titles, subtitles, descriptive texts, icons, and optionally,
 * images or videos. The component is structured to be reusable and customizable
 * through its props.
 *
 * @param {TemplateProps} props - The props that define the content and behavior of the component.
 * @returns {JSX.Element} The rendered BusinessOffers component.
 */
const BusinessOffers: React.FC<TemplateProps> = ({
    title,
    subtitle,
    leftText,
    rightText,
    icon,
    hasVideo,
    image,
    rightTextDown,
    leftTextDown,
}) => {
    return (
        <div className={styles.container}>
            <section className={styles.designSupport}>
                <div className={styles.designText}>
                    <h1 className={`${styles.textH1} ${rightTextDown ? styles.rightDown : ''}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className={styles.textH2} aria-label="Ваш внешний отдел дизайна">
                            {subtitle}
                        </h2>
                    )}
                </div>
                <div className={`${styles.designP} ${leftTextDown ? styles.leftDown : ''}`}>
                    <p className={styles.textP}>{rightText}</p>
                </div>
            </section>
            <section className={styles.designSupport2}>
                <div className={styles.designSupport3}>
                    <div className={styles.designText2}>
                        <Image
                            className={styles.designIcon}
                            src={icon}
                            alt="Иконка дизайна"
                            width={118}
                            height={118}
                            priority
                        />
                        <h3 className={styles.textH2}>Наши эксперты</h3>
                        <p className={styles.textP}>{leftText}</p>
                    </div>
                </div>
                <div className={styles.designImg}>
                    {hasVideo ? (
                        <iframe
                            width="648"
                            height="404"
                            src="https://www.youtube.com/embed/057G8o6ObK0?si=p98aIn1leQJJGj1n"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <Image
                            className={styles.designImg2}
                            src={image || 'https://placehold.co/648x404'}
                            alt="Дизайн концепция"
                            width={648}
                            height={404}
                            priority
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default BusinessOffers;
