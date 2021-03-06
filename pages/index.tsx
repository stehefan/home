import Head from 'next/head';
import InfoSection from '../components/InfoSection/InfoSection.module';
import SocialIcon from '../components/SocialIcon/SocialIcon.module';
import SocialIconList from '../components/SocialIconList/SocialIconList.module';
import React from 'react';
import moment from 'moment';

const Home: React.FC = () => {
    const age: number = moment().diff([1986,2,27], 'years');

    return (
        <>
            <Head>
                <title>stefan - coding, lifting, living</title>
            </Head>
            <h1 style={{textAlign: 'center'}}>Moin!</h1>
            <InfoSection name="Study" image={'avatar_one.jpg'}>
                Hej, my name is Stefan, I'm a {age} year old from Salzwedel, now living in
                Hamburg. In between, I have been living in Hanover, studying <i>Applied Informatics</i> at the <i>University
                of Applied Science and Arts Hannover</i>. During that time, I was working as a research associate at
                the <a target="_blank" rel="noreferrer" href="http://sw-architecture.inform.hs-hannover.de/joomla/index.php/team">Software
                Architecture Research Group</a>, researching event-based communication between machines.
            </InfoSection>
            <InfoSection name="Work" image={'avatar_two.jpg'}>
                Since 2014 I am working as a Consultant at <a target="_blank" rel="noreferrer" href="https://www.netlight.com/">Netlight
                Consulting</a>, first in Munich, Germany and now in Hamburg, Germany. My goal is helping our clients
                to achieve something great in their projects, developing software, managing infrastructure and
                growing teams. I love my work and the people I work with on a daily basis and am eager to see where
                this leads me in the future.
            </InfoSection>
            <InfoSection name="Spare time" image={'avatar_three.jpg'}>
                Besides work, I love my life in Hamburg, enjoying the city and all it has to offer. I'm doing
                weightlifting in my spare time, challenging myself to go to the deep end. Listening to music nearly
                every minute of my day, I love to go to concerts on a regular basis and Hamburg and its alternative
                scene and locations help me in doing so in a great way! Feel free to contact me on any of the
                platforms linked to down below.
            </InfoSection>
            <SocialIconList>
                <SocialIcon href='https://www.github.com/stehefan' name='Github'/>
                <SocialIcon href='https://www.linkedin.com/in/stefan-lier-44682583/' name='LinkedIn'/>
                <SocialIcon href='https://www.xing.com/profile/Stefan_Lier3' name='Xing'/>
            </SocialIconList>
        </>
    )

}

export default Home;
