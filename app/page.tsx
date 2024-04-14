import { redirect } from 'next/navigation';

export default function Home(): JSX.Element {
	return redirect('/login');
}
