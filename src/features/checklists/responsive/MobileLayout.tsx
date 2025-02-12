import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
		<div className="mt-16 mb-32">
			<div className="scrollbar-hidden p-2">
				<AnimatePresence mode="wait">
					{activeTab === "active" && (
						<motion.div
							key="active"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							className=""
						>
							<Tabs defaultValue="aktive" className="">
								<TabsList className="flex">
									<TabsTrigger value="aktive" className="flex-1">
										Aktive
									</TabsTrigger>
									<TabsTrigger value="alle" className="flex-1">
										Alle
									</TabsTrigger>
								</TabsList>
								<TabsContent value="aktive">
									<ChecklistActive />
								</TabsContent>
								<TabsContent value="alle">
									<ChecklistOverviewSection />
								</TabsContent>
							</Tabs>
						</motion.div>
					)}
					{activeTab === "history" && (
						<motion.div
							key="history"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							className=""
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
							className=""
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
