import React from "react";
import ChecklistOverviewSection from "@/features/checklists/ChecklistOverviewSection";
import ChecklistDoneSection from "@/features/checklists/ChecklistDoneSection";
import AnalyticsDashboard from "@/features/checklists/components/charts/AnalyticsDashboard";
import ChecklistActive from "@/features/checklists/ChecklistActive";

const DesktopLayout: React.FC = () => {
	return (
		<div className="flex flex-col h-screen p-4">
			{/* Analytics Section */}
			<AnalyticsDashboard />

			{/* Active Checklist */}
			<div className="w-full pt-6 pl-6 pr-6">
				<ChecklistActive />
			</div>

			{/* Checklist Sections */}
			<div className="flex-1 flex flex-row gap-8 p-6">
				<div className="w-full h-full">
					<ChecklistOverviewSection />
				</div>

				<div className="w-full h-full">
					<ChecklistDoneSection />
				</div>
			</div>
		</div>
	);
};

export default DesktopLayout;
