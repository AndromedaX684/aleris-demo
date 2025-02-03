import React from "react";
import { Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Title,
	ChartOptions,
} from "chart.js";

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart: React.FC = () => {
	const data = {
		labels: ["Oslo", "Trondheim", "Bergen"],
		datasets: [
			{
				label: "Category Breakdown",
				data: [40, 15, 20],
				backgroundColor: [
					"rgba(4, 209, 178, 0.6)", // Base Teal
					"rgba(2, 158, 136, 0.6)", // Darker Teal
					"rgba(107, 232, 209, 0.6)", // Soft Mint
				],
				borderColor: [
					"rgba(4, 209, 178, 1)",
					"rgba(2, 158, 136, 1)",
					"rgba(107, 232, 209, 1)",
				],
				borderWidth: 0.2,
			},
		],
	};

	const options: ChartOptions<"pie"> = {
		responsive: true,
		maintainAspectRatio: false,
		layout: { padding: 0 },
		plugins: {
			legend: {
				position: "bottom" as const, // ✅ Explicitly cast to avoid TS error
				align: "center",
				labels: {
					boxWidth: 8,
					padding: 5,
					font: { size: 10 },
				},
			},
			title: { display: false },
		},
	};

	return (
		<div className="h-[200px] w-full flex items-center justify-center">
			<Pie data={data} options={options} />
		</div>
	);
};

export default PieChart;
