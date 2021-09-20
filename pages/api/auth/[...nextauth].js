import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import dbConnect from "@/utils/database";
import User from "@/models/users";
import { verifyPassword } from "@/utils/auth";

dbConnect();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        // console.log(credentials)

        const reqUser = await User.findOne({ username: credentials.username });
        const isValid = await verifyPassword(
          credentials.password,
          reqUser.password
        );

        const user = {
          id: reqUser._id,
          fullname: reqUser.fullname,
          phone: reqUser.phoneNumber,
          role: reqUser.role,
        };

        if (isValid && reqUser) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    // This is used to generate the actual signingKey and produces a warning
    // message if not defined explicitly.
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // You can generate a signing key using `jose newkey -s 512 -t oct -a HS512`
    // This gives you direct knowledge of the key used to sign the token so you can use it
    // to authenticate indirectly (eg. to a database driver)
    // signingKey: {"kty":"oct","kid":"Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q","alg":"HS512","k":"K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"},
    // If you chose something other than the default algorithm for the signingKey (HS512)
    // you also need to configure the algorithm
    // verificationOptions: {
    //    algorithms: ['HS256']
    // },
    // Set to true to use encryption. Defaults to false (signing only).
    // encryption: true,
    // encryptionKey: "",
    // decryptionKey = encryptionKey,
    // decryptionOptions = {
    //    algorithms: ['A256GCM']
    // },
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // async encode({ secret, token, maxAge }) {},
    // async decode({ secret, token, maxAge }) {},
  },
  callbacks: {
    async jwt(token, user) {
      user && (token.user = user);
      return token;
    },
    async session(session, token, user) {
      session.user = token.user;
      return session;
    },
  },
});
