import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { darkTheme } from '@react-full-stack/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <UserProvider>
          <Head>
            <title>Welcome to frontend!</title>
          </Head>
          <main className="app bg-dark min-h-screen overflow-auto relative">
            <Component {...pageProps} />
          </main>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
