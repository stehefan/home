import '../styles/main.scss'

type AppProps = {
    Component: any;
    pageProps: any
}

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return <Component {...pageProps}/>;
}

export default App;
