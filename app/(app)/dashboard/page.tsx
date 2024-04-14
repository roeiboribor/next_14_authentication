import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Metadata {
	title: string;
	description: string;
}

export const metadata: Metadata = {
	title: 'Dashboard | Webdevbro',
	description: 'Dashboard',
};

const Dashboard: React.FC = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<ul className="flex space-x-6 px-4 mt-8">
				<li>
					<Link href="/tickets">
						<Button>Tickets</Button>
					</Link>
				</li>
				<li>
					<Link href="/users">
						<Button>Users</Button>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Dashboard;
