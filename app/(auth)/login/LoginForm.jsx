'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginForm = () => {
	const [email, setEmail] = useState('roeiboribor@gmail.com');
	const [password, setPassword] = useState('passwords');
	const [errors, setErrors] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signIn('credentials', {
				email: email,
				password: password,
				redirect: false, // Prevent automatic redirection
			});

			// Check if response contains an error message
			if (response.error && response.error === 'CredentialsSignin') {
				setErrors(['Invalid Credentials']);
			} else {
				// Authentication succeeded, redirect or handle accordingly
				console.log('Boom Pasok!');
			}
		} catch (error) {
			console.error('Authentication failed', error);
		}
	};

	return <div>LoginForm</div>;
};

export default LoginForm;
