import Head from 'next/head';
import InfoSection from '../components/InfoSection/InfoSection.module';
import SocialIcon from '../components/SocialIcon/SocialIcon.module';
import SocialIconList from '../components/SocialIconList/SocialIconList.module';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>stefan - coding, lifting, living</title>
            </Head>
            <h1 style={{textAlign: 'center'}}>Moin!</h1>
            <InfoSection image={'avatar_one.jpg'}>
                Hej, my name is Stefan, I'm a <span id="age-label">34</span> year old from Salzwedel, now living in
                Hamburg. In between, I have been living in Hanover, studying <i>Applied Informatics</i> at the <i>University
                of Applied Science and Arts Hannover</i>. During that time, I was working as a research associate at
                the <a href="http://sw-architecture.inform.hs-hannover.de/joomla/index.php/team">Software
                Architecture Research Group</a>, researching event-based communication between machines.
            </InfoSection>
            <InfoSection image={'avatar_two.jpg'}>
                Since 2015 I am working as a Consultant at <a href="https://www.netlight.com/">Netlight
                Consulting</a>, first in Munich, Germany and now in Hamburg, Germany. My goal is helping our clients
                to achieve something great in their projects, developing software, managing infrastructure and
                growing teams. I love my work and the people I work with on a daily basis and am eager to see where
                this leads me in the future.
            </InfoSection>
            <InfoSection image={'avatar_three.jpg'}>
                Besides work, I love my life in Hamburg, enjoying the city and all it has to offer. I'm doing
                weightlifting in my spare time, challenging myself to go to the deep end. Listening to music nearly
                every minute of my day, I love to go to concerts on a regular basis and Hamburg and its alternative
                scene and locations help me in doing so in a great way! Feel free to contact me on any of the
                platforms linked to down below.
            </InfoSection>
            <SocialIconList>
                <SocialIcon href='https://www.github.com/stehefan' name='github' />
                <SocialIcon href='https://www.linkedin.com/in/stefan-lier-44682583/' name='linkedin' />
                <SocialIcon href='https://www.xing.com/profile/Stefan_Lier3' name='xing' />
            </SocialIconList>
        </>
    )

}

export default Home;