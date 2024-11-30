
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'E mail', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' }
            },
            async authorize(credentials:any) {
                return {
                    id: 'user1',
                    name: 'something',
                    email: 'harkirat@gmail.com'
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt: ({token, user}) => {
            token.userId = token.sub;
            return token
        },
        session: ({session, token,user}: any) => {
            console.log(session)
            if(session && session.user) {
                session.user.id = token.userId;

            }

            return session;
        }
        
    }
});


export const GET = handler;
export const POST = handler;