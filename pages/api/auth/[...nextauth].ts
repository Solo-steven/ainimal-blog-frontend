import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { login } from "../../../service";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Custome",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password"}
            },
            authorize: async (credentials, req) => {
                const email = credentials?.email , password = credentials?.password  ;
                const user: any = await login(email as string, password as string);
                if(user) return user;
                return null;
            }
        })
    ],
    callbacks: {
        async session({session, token}) {
            session.user = token.user as any;
            return session;
        },
        async jwt({token, user}) {
            if(user) token.user = user;
            return token;
        }
    }
})