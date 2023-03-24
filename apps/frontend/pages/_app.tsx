import { Auth0Provider } from '@auth0/auth0-react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth0Provider
        domain="dev-react-full-stack.eu.auth0.com"
        clientId="cFTYdmARn7tuaHtaDlBaD1tAfdXEbxOK"
        authorizationParams={{
          redirect_uri: 'http://localhost:4200/auth/auth',
          audience: 'https://dev-react-full-stack.eu.auth0.com/api/v2/',
          scope: 'read:current_user update:current_user_metadata',
        }}
      >
        <Head>
          <title>Welcome to frontend!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Auth0Provider>
    </>
  );
}

export default CustomApp;
