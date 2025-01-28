import React from "react";
import ChecklistOverviewSection from "@/features/checklists/ChecklistOverviewSection";
import ChecklistDoneSection from "@/features/checklists/ChecklistDoneSection";
import AnalyticsDashboard from "../charts/AnalyticsDashboard";

const DesktopLayout: React.FC = () => {
	return (
		<div className="flex flex-col h-screen gap-4">
			{/* Analytics Section */}
			<AnalyticsDashboard />

			{/* Checklist Sections */}
			<div className="flex-1 flex flex-row gap-8 p-4">
				<div className="flex flex-1 min-h-0 bg-gray-50 shadow rounded-lg">
					<ChecklistOverviewSection />
				</div>
				<div className="flex flex-1 min-h-0 bg-gray-50 shadow rounded-lg">
					<ChecklistDoneSection />
				</div>
			</div>
		</div>
	);
};

export default DesktopLayout;
