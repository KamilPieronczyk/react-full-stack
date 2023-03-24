import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginButton />
    </div>
  );
}

export default LoginPage;
