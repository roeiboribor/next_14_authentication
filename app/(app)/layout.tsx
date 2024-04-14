import React, { ReactNode } from 'react';
import AuthContext from '@/modules/auth/components/AuthContext';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<AuthContext>
			<main className="font-sans text-gray-900 antialiased">{children}</main>
		</AuthContext>
	);
};

export default Layout;
