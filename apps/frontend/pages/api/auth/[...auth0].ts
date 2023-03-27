import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: process.env.TODO_API_AUDIENCE, // or AUTH0_AUDIENCE
      // Add the `offline_access` scope to also get a Refresh Token
      scope: process.env.AUTH0_SCOPE, // or AUTH0_SCOPE
    },
  }),
});
