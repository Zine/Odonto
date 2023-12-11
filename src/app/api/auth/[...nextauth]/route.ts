import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthorizeLogin } from "@/lib/auth.services";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@odonto.local",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: AuthorizeLogin,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
