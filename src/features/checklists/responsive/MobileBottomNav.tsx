import React from "react";
import { FiClipboard, FiCheckCircle, FiBarChart } from "react-icons/fi";

// Define the type for each tab
type TabType = "active" | "history" | "analytics";

// Props for the MobileBottomNav component
interface MobileBottomNavProps {
	activeTab: TabType;
	setActiveTab: (tab: TabType) => void;
}

// Type for the button object
interface NavButton {
	icon: React.ReactNode; // React element (e.g., an icon)
	label: string; // Label for the button
	tab: TabType; // Tab type associated with the button
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
	activeTab,
	setActiveTab,
}) => {
	// Array of buttons with their properties
	const buttons: NavButton[] = [
		{ icon: <FiClipboard size={22} />, label: "Lister", tab: "active" },
		{ icon: <FiCheckCircle size={22} />, label: "Log", tab: "history" },
		{ icon: <FiBarChart size={22} />, label: "Analyser", tab: "analytics" },
	];

	return (
		<nav
			className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 
      flex justify-around items-center h-16 pb-2 shadow-md"
		>
			{buttons.map((btn) => (
				<button
					key={btn.tab}
					onClick={() => setActiveTab(btn.tab)}
					className={`flex flex-col items-center justify-center p-2 w-1/3 transition-all
            ${
							activeTab === btn.tab
								? "text-accent font-bold scale-110"
								: "text-gray-500 hover:text-gray-700"
						}`}
					aria-label={`Switch to ${btn.label} tab`}
				>
					<span>{btn.icon}</span>
					<span className="text-xs font-medium mt-1">{btn.label}</span>
				</button>
			))}
		</nav>
	);
};

export default MobileBottomNav;
