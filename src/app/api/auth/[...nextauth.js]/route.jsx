// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/github"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   pages: {
//     signin: "/auth/signin"
//   }
// }

// export default NextAuth(authOptions)

import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signin: "/auth/signin"
  }
})

export { handler as GET, handler as POST }