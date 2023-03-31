import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export function Home() {
  return (
    <div className="">
      <h1 className="mt-20">Welcome to home!</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();

export default Home;
