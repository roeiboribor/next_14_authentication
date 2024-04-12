'use client';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

// FORM FIELD RELATED
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const LoginForm = () => {
	const formSchema = z.object({
		email: z
			.string({ required_error: 'The email field is required.' })
			.email({ message: 'must be a valid email address' })
			.max(255, { message: 'The email field is too long' }),
		password: z
			.string({ required_error: 'The email field is required.' })
			.max(255),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await signIn('credentials', {
				email: values?.email,
				password: values?.password,
				redirect: false, // Prevent automatic redirection
			});

			// Check if response contains an error message
			if (response.error && response.error === 'CredentialsSignin') {
				form.setError('email', {
					type: 'manual',
					message: 'Invalid Credentials',
				});
			} else {
				form.reset();
				// REDIRECT IF AUTHENTICATED
				// CODE HERE...
				console.log('Boom Pasok!');
			}
		} catch (error) {
			console.error('Authentication failed', error);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="Your email address here..."
									autoFocus
									required
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Your password here..."
									required
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full block">
					Login
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
