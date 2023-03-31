import Typography from '@mui/material/Typography';
import { Button } from '@react-full-stack/ui';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirectIfAuthenticated } from '../core/auth/redirect-if-authenticated';

export function Index() {
  return (
    <section className="min-h-[inherit] text-left lg:text-center p-4 lg:p-8 lg:pt-32 ">
      <div className="relative w-full max-w-[600px] lg:w-[600px] mx-auto">
        <Image src="/images/login-image.png" alt="TaskGenie Logo" fill className="object-contain !relative" />
      </div>
      <div className=" w-full lg:w-[600px] lg:mx-auto">
        <Typography variant="h3" color="white" className="!my-10">
          <span className="text-secondary pr-2 block lg:inline-block">TaskGenie</span>
          The only productivity app you need
        </Typography>
        <Link href="/api/auth/login" className="decoration-transparent">
          <Button size="large" fullWidth color="secondary" className="my-4">
            Sign In
          </Button>
        </Link>
        <Typography variant="caption" color="gray">
          By Continuing you agree to our Terms of Service and Privacy Policy
        </Typography>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = redirectIfAuthenticated('/home');

export default Index;
