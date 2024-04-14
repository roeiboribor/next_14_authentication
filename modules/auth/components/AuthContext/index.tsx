'use client';

import { SessionProvider } from 'next-auth/react';
// import { Session } from 'next-auth';
import { ReactNode } from 'react';

export interface AuthContextProps {
	children: ReactNode;
	// session: Session;
}

export default function AuthContext({ children }: AuthContextProps) {
	return <SessionProvider>{children}</SessionProvider>;
}
