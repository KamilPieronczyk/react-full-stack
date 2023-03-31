import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';

export const redirectIfAuthenticated =
  (redirectTo: string): GetServerSideProps =>
  async ({ req, res }) => {
    const session = await getSession(req, res);

    if (session) {
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
        props: {},
      };
    }

    return {
      redirect: {},
      props: {},
    };
  };
