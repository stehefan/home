import '../styles/main.scss'

type AppProps = {
    Component: any;
    pageProps: any
}

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return <Component {...pageProps}/>;
}

export default App;
