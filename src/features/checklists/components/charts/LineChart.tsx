import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register components for Chart.js
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart: React.FC = () => {
	const data = {
		labels: ["Januar", "Februar", "Mars", "April"],
		datasets: [
			{
				label: "Avvik",
				data: [10, 15, 8, 5],
				borderColor: "rgba(255, 99, 132, 1)",
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderWidth: 2,
				fill: true,
			},
		],
	};

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

	return <Line data={data} options={options} />;
};

export default LineChart;
