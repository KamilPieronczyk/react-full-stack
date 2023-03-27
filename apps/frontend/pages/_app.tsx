import { UserProvider } from '@auth0/nextjs-auth0/client';
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
      <UserProvider>
        <Head>
          <title>Welcome to frontend!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </>
  );
}

export default CustomApp;
