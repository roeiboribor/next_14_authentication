import AuthContext from '@/modules/auth/components/AuthContext';

const Layout = ({ children }) => {
	return (
		<AuthContext>
			<main className="font-sans text-gray-900 antialiased">{children}</main>
		</AuthContext>
	);
};

export default Layout;
