import React from 'react';
import Document, {
    type DocumentInitialProps,
    type DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = async () =>
                await originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
    // esse código acima é responsável por configurar o Styled Components para trabalhar com o SSR. 
    // O motivo é que, no lado do servidor, os estilos não são aplicados da mesma forma que no lado do cliente.
    //  Portanto, é necessário coletar os estilos gerados pelas tags Styled Components durante a renderização no lado do servidor e 
    // incluí-los na resposta HTML para que os estilos sejam aplicados corretamente.

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600&display=swap"
                        rel="stylesheet">
                    </link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}