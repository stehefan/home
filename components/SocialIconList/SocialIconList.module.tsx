import styles from './SocialIconList.module.scss';
import React from 'react';

const SocialIconList: React.FC = ({children}) => {
    return <div className={styles.socialIconList}>
        {children}
    </div>
};

export default SocialIconList;