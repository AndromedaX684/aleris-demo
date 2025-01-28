import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart: React.FC = () => {
	const data = {
		labels: ["Equipment", "Operations", "Inventory"],
		datasets: [
			{
				label: "Category Breakdown",
				data: [40, 35, 25],
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

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "right" as const,
				labels: {
					boxWidth: 12, // Smaller legend box
					padding: 10, // Space around legend items
				},
			},
			title: {
				display: false,
			},
		},
	};

	return (
		<div className="flex justify-between items-center w-full h-[280px]">
			<Pie data={data} options={options} />
		</div>
	);
};

export default PieChart;
