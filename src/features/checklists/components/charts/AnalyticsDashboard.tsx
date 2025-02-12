import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const AnalyticsDashboard: React.FC = () => {
	return (
		<div className="flex-1 pt-6 pl-6 pr-6">
			<h2 className="text-2xl font-bold mb-6">Data Analytics</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Gjennomførte Sjekklister</CardTitle>
					</CardHeader>
					<CardContent className="h-full flex flex-col items-center justify-between">
						{/* ✅ Chart Container - Keeps Everything Inside */}
						<div className="w-full h-[180px] flex items-center justify-center">
							<BarChart />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Avvik</CardTitle>
					</CardHeader>
					<CardContent className="h-full flex flex-col items-center justify-between">
						{/* ✅ Chart Container - Keeps Everything Inside */}
						<div className="w-full h-[180px] flex items-center justify-center">
							<LineChart />{" "}
						</div>
					</CardContent>
				</Card>

				<Card className="">
					<CardHeader>
						<CardTitle>Per Klinikk</CardTitle>
					</CardHeader>
					<CardContent className="h-full flex flex-col items-center justify-between">
						{/* ✅ Chart Container - Keeps Everything Inside */}
						<div className="w-full h-[180px] flex items-center justify-center">
							<PieChart />
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default AnalyticsDashboard;
