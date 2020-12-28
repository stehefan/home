import styles from './SocialIcon.module.scss';
import React from 'react';

type SocialIconProps = {
    name: string;
    href: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({href, name}) => {
    return <span className={styles.socialIcon}>
        <a href={href} className={styles.socialIcon__link} target='_blank'>
            <img width={50} className={styles.socialIcon__image} src={`/${name.toLowerCase()}.svg`}
                 alt={`Link to ${name}`}/>
        </a>
    </span>
};

export default SocialIcon;