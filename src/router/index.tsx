import { createBrowserRouter } from "react-router";
import App from "@/app/App";
import HomePage from "@/pages/HomePage";
import Vaksine from "@/pages/Vaksine";
import { ChecklistDetail } from "@/features/checklists/ChecklistDetail";
import ResponsiveLayout from "@/components/responsive/ResponsiveLayout";

// Layouts
import RootLayout from "@/layouts/RootLayout";
import HomeLayout from "@/layouts/HomeLayout";
import ChecklistLayout from "@/layouts/ChecklistLayout";
import VaccineLayout from "@/layouts/VaccineLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "hjem",
				element: <HomeLayout />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
				],
			},
			{
				path: "sjekklister",
				element: <ChecklistLayout />,
				children: [
					{
						index: true,
						element: <ResponsiveLayout />,
					},
				],
			},
			{
				path: "sjekklister/:id",
				element: <ChecklistDetail />,
			},
			{
				path: "vaksiner",
				element: <VaccineLayout />,
				children: [
					{
						index: true,
						element: <Vaksine />,
					},
				],
			},
		],
	},
]);
