import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    email: string;
    name: string;
  }
  interface Session {
    user: {
      email: string;
      name: string;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      email: string;
      name: string;
    };
  }
}
