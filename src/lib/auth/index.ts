import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 3600,
    updateAge: 0,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!!email && !!password) {
          const user = { id: 1, email: email, name: email };
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};

export const getAuthSession = () => getServerSession(authOptions);
