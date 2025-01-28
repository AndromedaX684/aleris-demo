import React from "react";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";

const AnalyticsDashboard: React.FC = () => {
	return (
		<div className="flex-1 p-4">
			<h2 className="text-2xl font-bold mb-4">Data Analytics</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-white shadow rounded-lg p-4 h-[280px]">
					<h3 className="text-md font-semibold mb-2">Completion Rate</h3>
					<BarChart />
				</div>
				<div className="bg-white shadow rounded-lg p-4 h-[280px]">
					<h3 className="text-md font-semibold mb-2">Pending Tasks</h3>
					<LineChart />
				</div>
				<div className="bg-white shadow rounded-lg p-4 h-[280px]">
					<h3 className="text-md font-semibold mb-2">Category Breakdown</h3>
					<PieChart />
				</div>
			</div>
		</div>
	);
};

export default AnalyticsDashboard;
