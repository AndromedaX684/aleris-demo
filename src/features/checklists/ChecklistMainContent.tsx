import React from "react";
import ChecklistDoneSection from "./ChecklistDoneSection";
import ChecklistOverviewSection from "./ChecklistOverviewSection";

const MainChecklistPage: React.FC = () => {
	return (
		<div className="flex-1 flex flex-col min-h-0 overflow-auto bg-gray-50 p-8">
			{/* Header Section */}
			<header className="mb-8 flex items-center justify-between">
				<h1 className="text-3xl font-bold text-gray-900">Sjekklister</h1>
			</header>

			{/* Main Content */}
			<div className="flex flex-col h-screen">
				<div className="flex-1 min-h-0 flex flex-col gap-8">
					{/* All Checklists Section - Takes half height */}
					<div className="flex-1 min-h-0">
						<ChecklistOverviewSection />
					</div>
					{/* Done Checklists Section - Takes half height */}
					<div className="flex-1 min-h-0">
						<ChecklistDoneSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainChecklistPage;
