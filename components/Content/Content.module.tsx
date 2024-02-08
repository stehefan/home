import styles from './Content.module.scss';
import React from 'react';

const Content: React.FunctionComponent = () => {
    return <div className={styles.content}>
        <img src={`/avatar.jpg`}
             className={styles.avatar}
             width={300} height={300}
             alt={'Image of Stefan Lier'}
        />
        <div className={styles.info}>
            <a href={'https://www.linkedin.com/in/stefan-lier-44682583/'}
               target={'_blank'}
               rel="noreferrer"
               aria-label={'Link to Stefans LinkedIn Profile'}>
                <img src={'/linkedin.svg'}
                     className={styles.socialIcon}
                     width={50}
                     alt={'Link to Stefans LinkedIn Profile'}
                />
            </a>
            <a href={'https://www.github.com/stehefan'}
               target={'_blank'}
               rel="noreferrer"
               aria-label={'Link to Stefans Github Profile'}>
            <img src={'/github.svg'}
                 className={styles.socialIcon}
                 width={50}
                 alt={'Link to Stefans Github Profile'}
            />
            </a>
        </div>
    </div>
}

export default Content;
