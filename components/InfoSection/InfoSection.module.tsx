import styles from './InfoSection.module.scss';

type InfoSectionProps = {
    image: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({image, children}) => {
    return <div className={styles.infoSection}>
        <img src={`/${image}`} className={styles.infoSection__image} />
        <div className={styles.infoSection__content}>{children}</div>
    </div>
}

export default InfoSection;