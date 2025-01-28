import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart: React.FC = () => {
	// Chart Data
	const data = {
		labels: ["January", "February", "March", "April"],
		datasets: [
			{
				label: "Completed Checklists",
				data: [65, 59, 80, 81],
				backgroundColor: "rgba(4, 209, 178, 0.6)", // Base Teal
				borderColor: "rgba(4, 209, 178, 1)",
				borderWidth: 1,
			},
		],
	};

	// Chart Options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false,
			},
		},
	};

	return <Bar data={data} options={options} />;
};

export default BarChart;
