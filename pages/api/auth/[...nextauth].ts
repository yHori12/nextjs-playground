import NextAuth, { NextAuthOptions } from "next-auth"
import CognitoProvider, { CognitoProfile } from "next-auth/providers/cognito";


export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    jwt({ token, account }) {

      if (account) {
        console.log("account");
        console.log(account);

        token.idToken = account.id_token;
        token.accessToken = account.access_token;
        token.expiresAt = (account.expires_at as number) * 1000;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },
    session({ session, token }) {
      console.log("token");
      console.log(token);

      session.idToken = token.idToken;
      session.accessToken = token.access_token;
      return session;
    },
  },
}

export default NextAuth(authOptions)
