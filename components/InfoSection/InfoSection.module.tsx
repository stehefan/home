import styles from './InfoSection.module.scss';
import React from 'react';

type InfoSectionProps = {
    image: string;
    name: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({image, name, children}) => {
    return <div className={styles.infoSection}>
        <img src={`/${image}`} className={styles.infoSection__image} width={100} height={100}
             alt={`Avatar for ${name}-Section`}/>
        <div className={styles.infoSection__content}>{children}</div>
    </div>
}

export default InfoSection;
