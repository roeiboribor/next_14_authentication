const AuthCard = ({ logo, children }) => {
	return (
		<div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
			<div>{logo}</div>

			<div className="w-full sm:max-w-md mt-4 overflow-hidden">{children}</div>
		</div>
	);
};

export default AuthCard;
