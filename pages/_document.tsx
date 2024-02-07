import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Private Home in the internet for Stefan Lier"/>
                    <link rel="shortcut icon" href="/favicon.png"/>
                    <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32"/>
                    <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96"/>
                    <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
