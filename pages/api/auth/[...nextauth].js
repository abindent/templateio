import NextAuth  from "next-auth";
import GitHubProvider from "next-auth/providers/github"

const options = {
     providers: [
        GitHubProvider({
            clientId: "938e706b2924c51ea7fa",
            clientSecret: "9c13487436cb83f02091e200e792119e2a1609d4",
          })
     ],
     pages: {
        newUser: '/profile'
      },
}

export default (req,res) => NextAuth(req, res, options);