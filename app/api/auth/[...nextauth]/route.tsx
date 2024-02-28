import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "text"}
            },
            async authorize(credentials, req) {
                const res = true // fetch data from db
                console.log("creds:", credentials)

                return credentials
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
