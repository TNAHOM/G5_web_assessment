// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials, req) {
//                 if (!credentials?.username || !credentials?.password) {
//                     return null;
//                 }
//                 try {
//                     const user = await login(credentials.username, credentials.password);
//                     if (user) {
//                         return user;
//                     }
//                     return null;
//                 } catch (error) {
//                     console.error("Authorization error:", error);
//                     return null;
//                 }
//             },
//         }),
//     ],
//     pages: {
//         signIn: '/auth/Login',  // Custom sign-in page
//         signOut: '/auth/signout', // Custom sign-out page
//         error: '/auth/error',     // Error page
//         verifyRequest: '/auth/verify-request', // Email verification page
//         newUser: '/auth/welcome', // New users' page
//     },
//     session: {
//         strategy: "jwt",  // Use JWT for session tokens
//     },
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session({ session, token }) {
//             if (token) {
//                 session.user.id = token.id;
//             }
//             return session;
//         },
//     },
//     secret: process.env.NEXTAUTH_SECRET, // Ensure you set this in your environment variables
// });

// export { handler as GET, handler as POST };
