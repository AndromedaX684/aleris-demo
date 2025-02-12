import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "@/features/checklists/responsive/MobileLayout";
import DesktopLayout from "@/features/checklists/responsive/DesktopLayout";

const MainChecklistPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState<
		"active" | "history" | "analytics"
	>("active");
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<div>
			{/* Conditional Rendering for Layouts */}
			{isMobile ? (
				<MobileLayout activeTab={activeTab} setActiveTab={setActiveTab} />
			) : (
				<DesktopLayout />
			)}
		</div>
	);
};

export default MainChecklistPage;
