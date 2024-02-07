import styles from './SocialIconList.module.scss';
import React from 'react';

type SocialIconProps = {
    children?: React.ReactNode;
}

const SocialIconList: React.FunctionComponent<SocialIconProps> = ({children}) => {
    return <div className={styles.socialIconList}>
        {children}
    </div>
};

export default SocialIconList;
