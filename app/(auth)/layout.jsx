import Link from 'next/link';
import AuthCard from '@/app/(auth)/AuthCard';
import ApplicationLogo from '@/components/ApplicationLogo';

export const metadata = {
	title: 'Laravel',
};

const Layout = ({ children }) => {
	return (
		<main>
			<div className="font-sans text-gray-900 antialiased">
				<AuthCard
					logo={
						<Link href="/">
							<ApplicationLogo className="h-20 fill-current text-gray-500" />
						</Link>
					}
				>
					{children}
				</AuthCard>
			</div>
		</main>
	);
};

export default Layout;
