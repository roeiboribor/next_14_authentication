import Link from 'next/link';
import AuthCard from '@/app/(auth)/AuthCard';
import ApplicationLogo from '@/components/ApplicationLogo';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<main className="font-sans text-gray-900 antialiased">
			<AuthCard
				logo={
					<Link href="/">
						<ApplicationLogo className="h-20 fill-current text-gray-500" />
					</Link>
				}
			>
				{children}
			</AuthCard>
		</main>
	);
};

export default Layout;
