/* eslint-disable react/display-name */
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { StyledEngineProvider } from '@mui/material/styles';
export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        enhanceComponent: (Component) => Component,
      });

    const intialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();

    return { ...intialProps, styles };
  }

  render() {
    return (
      <StyledEngineProvider injectFirst>
        <Html>
          <Head>
            {this.props.styles}
            {/* <link href="/css/variables.css" rel="stylesheet" /> */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </StyledEngineProvider>
    );
  }
}
