import { useLocation } from "react-router";
import { SearchForm } from "@/components/sidebar/search-form";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { LogoSection } from "@/components/sidebar/logo-section";
import { Link } from "react-router";
import VersionText from "@/components/sidebar/VersionText";

// This is sample data.
const data = {
	navMain: [
		{
			title: "Demo Apper",
			items: [
				{
					title: "Sjekklister",
					url: "/sjekklister",
				},
				{
					title: "Vaksiner",
					url: "/vaksiner",
				},
			],
		},
	],
};

export function HomeSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const location = useLocation(); // Get the current location from react-router

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<LogoSection />

				<SearchForm />
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.navMain.map((group) => (
					<SidebarGroup key={group.title}>
						<SidebarGroupLabel>{group.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{group.items.map((item) => {
									const isActive = location.pathname === item.url; // Check if the current path matches the item URL
									return (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild isActive={isActive}>
												<Link
													to={item.url}
													className={isActive ? "text-blue-500 font-bold" : ""}
												>
													{item.title}
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
			<VersionText />
		</Sidebar>
	);
}
