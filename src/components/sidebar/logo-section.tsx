import { Link } from "react-router";
import { SidebarHeader } from "@/components/ui/sidebar";

export function LogoSection() {
	return (
		<SidebarHeader className="border-sidebar-border">
			<Link to="/hjem" className="flex items-center px-2 hover:opacity-80">
				<img
					src="https://logosandtypes.com/wp-content/uploads/2020/06/aleris.svg"
					alt="Aleris Logo"
					className="h-8 w-auto"
				/>
				<h1 className="text-lg font-semibold">Aleris Demo</h1>
			</Link>
		</SidebarHeader>
	);
}
