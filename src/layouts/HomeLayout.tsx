import { HomeSidebar } from "@/features/homePage/HomeSidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Avatar from "@/components/ui/avatar";

export default function SideBar() {
	return (
		<SidebarProvider>
			<HomeSidebar />
			<SidebarInset>
				<header className="bg-background flex shrink-0 items-center gap-2 border-b fixed inset-x-0 top-0 isolate z-100 h-16 px-4 md:sticky md:top-0 md:border-b md:bg-background">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="/hjem">Dashbord</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="ml-auto">
						<Avatar
							src="https://example.com/avatar1.jpg"
							alt="User 1"
							fallbackText="JD"
							size="md"
						/>
					</div>
				</header>
				{/* Main Content Area for Nested Routes */}
				<main>
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
