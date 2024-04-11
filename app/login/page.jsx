'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('roeiboribor@gmail.com');
	const [password, setPassword] = useState('passwordss');

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signIn('credentials', {
				email: email,
				password: password,
				redirect: false, // Prevent automatic redirection
			});

			// Check if response contains an error message
			if (response.error) {
				console.log(response.error);
			} else {
				// Authentication succeeded, redirect or handle accordingly
				console.log('Boom Pasok!');
			}
		} catch (error) {
			console.error('Authentication failed', error);
		}
	};

	return (
		<main className="max-w-3xl mx-auto">
			<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
				<div className="flex flex-col">
					<label htmlFor="email">Email</label>
					<input
						className="mt-1 px-6 py-2 rounded"
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="password">Password</label>
					<input
						className="mt-1 px-6 py-2 rounded"
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div>
					<button
						className="bg-blue-500 px-6 py-1.5 rounded text-white"
						type="submit"
					>
						Sign in
					</button>
				</div>
			</form>
		</main>
	);
};

export default Login;
