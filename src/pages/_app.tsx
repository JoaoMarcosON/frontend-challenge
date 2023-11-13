import React, { StrictMode } from 'react'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/createGlobalStyle'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <StrictMode>
            <GlobalStyle />
            <ThemeProvider theme={{}}>
                <Head>
                    <title>Lista de tarefas</title>
                    <meta name="description" content="Lista de tarefas" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                </QueryClientProvider>
            </ThemeProvider >
        </StrictMode>
    )
}

export default App