import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
