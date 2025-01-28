import React from "react";
import { useMediaQuery } from "react-responsive";
import ChecklistMobileMainPage from "@/pages/ChecklistMobileMainPage";
import ChecklistDesktopMainPage from "@/pages/ChecklistDesktopMainPage";

const ResponsiveLayout: React.FC = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return isMobile ? <ChecklistMobileMainPage /> : <ChecklistDesktopMainPage />;
};

export default ResponsiveLayout;
