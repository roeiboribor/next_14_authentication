import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<ul className="flex space-x-6 px-4 mt-8">
				<li>
					<Button>
						<Link href="/tickets">Tickets</Link>
					</Button>
				</li>
				<li>
					<Button>
						<Link href="/users">Users</Link>
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default Dashboard;
