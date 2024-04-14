import { getServerSession } from 'next-auth';
import { authOptions } from '@/modules/auth/services/authOptions';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';
import { redirect } from 'next/navigation';

const Login = async () => {
	const session = await getServerSession(authOptions);

	if (session && session?.user) {
		redirect('/dashboard');
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-center">Sign In</CardTitle>
				<CardDescription className="text-center">
					Sign in with your credentials
				</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginForm />
			</CardContent>
		</Card>
	);
};

export default Login;
