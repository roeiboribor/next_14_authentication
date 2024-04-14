import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { poster } from '@/helpers/putter';

if (!process.env.NEXTAUTH_SECRET) {
	throw new Error(
		'please provide process.env.NEXTAUTH_SECRET environment variable'
	);
}

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					// Make a POST request to your Laravel API's login endpoint using Axios
					const response = await poster('/api/login', {
						email: credentials?.email,
						password: credentials?.password,
					});

					// Extract token and user data from the response
					const { token, user } = response.data;

					// If token and user data exist, return the user object
					if (token && user) {
						return { ...user, accessToken: token };
					} else {
						return null;
					}
				} catch (error) {
					console.error('Authentication error:', error.response.data.error);
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				//@ts-ignore
				token.accessToken = user?.accessToken;
			}
			return token;
		},
		async session({ session, token }) {
			//@ts-ignore
			session.accessToken = token.accessToken;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
};
