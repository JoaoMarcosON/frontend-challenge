import React, { StrictMode } from 'react';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/createGlobalStyle';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '../context/cartContext/CartProvider';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <StrictMode>
            <GlobalStyle />
            <ThemeProvider theme={{}}>
                <Head>
                    <title>mks-frontend-challenge</title>
                    <meta name="description" content="Desafio realizado por João Marcos" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <QueryClientProvider client={queryClient}>
                <CartProvider>
                <Component {...pageProps} />
                </CartProvider>
                </QueryClientProvider>
            </ThemeProvider >
        </StrictMode>
    )
};

export default App