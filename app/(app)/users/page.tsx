import React from 'react';

interface Metadata {
	title: string;
	description: string;
}

export const metadata: Metadata = {
	title: 'Users | Webdevbro',
	description: 'Users',
};

const Users: React.FC = () => {
	return <div>Users PROTECTED</div>;
};

export default Users;
