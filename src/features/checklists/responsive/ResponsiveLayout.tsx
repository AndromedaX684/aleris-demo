import React, { useState, useMemo, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsiveLayout: React.FC = () => {
	const [isClient, setIsClient] = useState(false);
	const [activeTab, setActiveTab] = useState<
		"active" | "history" | "analytics"
	>("active");

	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	useEffect(() => {
		// Ensure hydration and avoid mismatches with SSR
		setIsClient(true);
	}, []);

	const layout = useMemo(() => {
		if (!isClient) return null; // Prevent mismatches during SSR

		return isMobile ? (
			<MobileLayout activeTab={activeTab} setActiveTab={setActiveTab} />
		) : (
			<DesktopLayout />
		);
	}, [isClient, isMobile, activeTab]);

	return layout;
};

export default React.memo(ResponsiveLayout);
