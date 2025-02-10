import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<div className="min-h-[100dvh]">
			<Outlet />
		</div>
	);
};

export default RootLayout;
