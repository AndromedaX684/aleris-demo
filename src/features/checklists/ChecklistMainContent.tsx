import React from "react";
import ChecklistDoneSection from "./ChecklistDoneSection";
import ChecklistOverviewSection from "./ChecklistOverviewSection";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

const MainChecklistPage: React.FC = () => {
	return (
		<div className="flex-1 flex flex-col min-h-0 overflow-auto bg-gray-50 p-8">
			{/* Header Section */}
			<header className="mb-8 flex items-center justify-between">
				<h1 className="text-3xl font-bold text-gray-900">Sjekklister</h1>
			</header>

			{/* Main Content */}
			<div className="flex flex-col h-screen gap-4">
				{/* Top Section: Data Analytics */}
				<div className="flex-1 p-4">
					<h2 className="text-2xl font-bold mb-4">Data Analytics</h2>
					<div className="grid grid-cols-3 gap-4">
						{/* Graph 1 */}
						<div className="bg-white shadow rounded-lg p-4 h-[300px] flex flex-col justify-between">
							<h3 className="text-md font-semibold mb-2">Completion Rate</h3>
							<BarChart />
						</div>
						{/* Graph 2 */}
						<div className="bg-white shadow rounded-lg p-4 h-[300px] flex flex-col justify-between">
							<h3 className="text-md font-semibold mb-2">Pending Tasks</h3>
							<LineChart />
						</div>
						{/* Graph 3 */}
						<div className="bg-white shadow rounded-lg p-4 h-[300px] flex flex-col justify-between">
							<h3 className="text-md font-semibold mb-2">Category Breakdown</h3>
							<PieChart />
						</div>
					</div>
				</div>

				{/* Bottom Section: Checklists */}
				<div className="flex-1 flex flex-row gap-8 p-4">
					{/* All Checklists Section - Left Column */}
					<div className="flex flex-1 min-h-0 bg-gray-50 shadow rounded-lg">
						<ChecklistOverviewSection />
					</div>
					{/* Done Checklists Section - Right Column */}
					<div className="flex flex-1 min-h-0 bg-gray-50 shadow rounded-lg">
						<ChecklistDoneSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainChecklistPage;
