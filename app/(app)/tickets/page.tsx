import React from 'react';

interface Metadata {
	title: string;
	description: string;
}

export const metadata: Metadata = {
	title: 'Tickets | Webdevbro',
	description: 'Tickets',
};

const Tickets: React.FC = () => {
	return <div>Tickets PROTECTED</div>;
};

export default Tickets;
