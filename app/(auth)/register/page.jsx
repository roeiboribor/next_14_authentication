import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import React from 'react';

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
