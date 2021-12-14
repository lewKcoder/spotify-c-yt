import NextAuth from "next-auth"
import SpotifyProviders from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken() {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setAccessToken(token.refreshToken);

    const { body: refreshAccessToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshAccessToken.access_token,
      accessTokenExpires: Date.now + refreshToken.expires_in * 1000
    }

  } catch(error) {
    console.error(error)
    return {
      ...token,
      error: "RefreshTokenError"
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProviders({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, account, user}){
      if(account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        }
      }
      if(Date.now() < token.accessTokenExpires){
        return token;
      }

      return await refreshAccessToken(token)
    }
  }
})