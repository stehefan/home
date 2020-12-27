import '../styles/main.scss'
import React from 'react';

type AppProps = {
    Component: any;
    pageProps: any
}

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return <Component {...pageProps}/>;
}

export default App;
