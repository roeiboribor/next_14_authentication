import { Metadata } from 'next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
	title: 'Register | Webdevbro',
	description: 'Register your Webdevbro account',
};

const Register = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-center">Sign Up</CardTitle>
				<CardDescription className="text-center">
					Register your details
				</CardDescription>
			</CardHeader>
			<CardContent>Register Form Here...</CardContent>
		</Card>
	);
};

export default Register;
