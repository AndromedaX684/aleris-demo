import React from "react";
import MobileBottomNav from "./MobileBottomNav";
import ChecklistOverviewSection from "@/features/checklists/ChecklistOverviewSection";
import ChecklistDoneSection from "@/features/checklists/ChecklistDoneSection";
import ChecklistActive from "@/features/checklists/ChecklistActive";
import AnalyticsDashboard from "@/features/checklists/components/charts/AnalyticsDashboard";
import { AnimatePresence, motion } from "framer-motion";

// Define the props for MobileLayout
interface MobileLayoutProps {
	activeTab: "active" | "history" | "analytics";
	setActiveTab: (tab: "active" | "history" | "analytics") => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
	activeTab,
	setActiveTab,
}) => {
	return (
		<div className="flex flex-col min-h-screen mt-16 bg-gray-50 pb-16">
			<div className="flex-1 overflow-auto scrollbar-hidden">
				<AnimatePresence mode="wait">
					{activeTab === "active" && (
						<motion.div
							key="active"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							className="flex flex-col gap-2 bg-white shadow rounded-lg p-2"
						>
							<ChecklistActive />
							<ChecklistOverviewSection />
						</motion.div>
					)}
					{activeTab === "history" && (
						<motion.div
							key="history"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							className="bg-white shadow rounded-lg p-2"
						>
							<ChecklistDoneSection />
						</motion.div>
					)}
					{activeTab === "analytics" && (
						<motion.div
							key="analytics"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							className="bg-white shadow rounded-lg p-2"
						>
							<AnalyticsDashboard />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
};

export default MobileLayout;
