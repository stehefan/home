import Head from 'next/head';
import Content from "../components/Content/Content.module";

const Home: React.FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>stefan - coding, lifting, living</title>
            </Head>
            <Content />
        </>
    )

}

export default Home;
