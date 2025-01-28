import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./app/index.css";
import App from "./app/App";

// Layouts
import VaccinePageLayout from "./features/vaccines/VaccinePageLayout";
import ChecklistPageLayout from "./features/checklists/ChecklistPageLayout";
// pages
import HomePage from "./pages/HomePage";
import SideBar from "./features/homePage/HomePageLayout";
import Vaksine from "./pages/Vaksine";
import { ChecklistDetail } from "./features/checklists/ChecklistDetail";
import ResponsiveLayout from "./components/responsive/ResponsiveLayout";

const root = document.getElementById("root");
if (!root) {
	throw new Error(
		"Root element not found. Make sure there is a div with id='root' in your HTML."
	);
}

ReactDOM.createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* Main page */}
				<Route index element={<App />} />

				<Route element={<SideBar />}>
					<Route path="/hjem" element={<HomePage />}></Route>
				</Route>

				<Route element={<ChecklistPageLayout />}>
					<Route path="/sjekklister" element={<ResponsiveLayout />} />
					<Route path="/checklist/:id" element={<ChecklistDetail />} />
				</Route>

				<Route element={<VaccinePageLayout />}>
					<Route path="/vaksiner" element={<Vaksine />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
