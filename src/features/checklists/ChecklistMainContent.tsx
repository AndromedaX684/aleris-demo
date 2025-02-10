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
		<div className="flex-1 flex flex-col min-h-0 overflow-auto bg-gray-50 p-4 md:p-8">
			{/* Header Section - Hidden on mobile */}
			{!isMobile && (
				<header className="mb-8 flex flex-col items-start justify-center">
					<h1 className="text-3xl font-bold text-gray-900">Sjekklister</h1>
					<p className="text-sm text-gray-500 mt-1">
						En demo for å vise frem ideer til hovedsiden til sjekklister
					</p>
				</header>
			)}

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
