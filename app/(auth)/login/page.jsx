import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';

const Login = () => {
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
