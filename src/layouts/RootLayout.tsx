import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<div className="h-[calc(var(--vh)*100)]">
			<Outlet />
		</div>
	);
};

export default RootLayout;
