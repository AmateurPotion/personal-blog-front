import React from "react";
import Document, { Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";
class MyDocument extends Document<{ helmet: any }> {
    static async getInitialProps(context: DocumentContext) {
        const sheet = new ServerStyleSheet();
        try {
            context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
            const initialProps = await Document.getInitialProps(context);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
                helmet: Helmet.renderStatic()
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return (
            <html {...htmlAttrs}>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {this.props.styles}
                </head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
