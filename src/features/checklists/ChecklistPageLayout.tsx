import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { ChecklistSidebar } from "./ChecklistSidebar";
import Avatar from "@/components/ui/avatar";

export default function ChecklistPageLayout() {
	return (
		<SidebarProvider>
			<ChecklistSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-inherit">
					{/* Left Content */}
					<div className="flex items-center gap-2">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/hjem">Dashbord</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Sjekklister</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					{/* Right Content */}
					<div>
						<Avatar
							src="https://example.com/avatar1.jpg"
							alt="User 1"
							fallbackText="JD"
							size="md"
						/>
					</div>
				</header>

				{/* Main Content Area for Nested Routes */}
				<main className="flex-1 flex flex-col min-h-0 overflow-auto">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
