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
import { Outlet, Link, useParams } from "react-router";
import { mockChecklists } from "@/data/mockChecklists";
import { ChecklistSidebar } from "@/features/checklists/ChecklistSidebar";
import Avatar from "@/components/ui/avatar";

const ChecklistLayout = () => {
	const { id } = useParams(); // ✅ Extracts the checklist ID from the URL
	console.log("Checklist ID from URL:", id); // ✅ Debugging step

	// ✅ Find the checklist based on the extracted ID
	const checklist = mockChecklists.find((c) => c.id === String(id));

	return (
		<SidebarProvider>
			<ChecklistSidebar />
			<SidebarInset>
				<header className="bg-background flex shrink-0 items-center gap-2 border-b fixed inset-x-0 top-0 isolate z-20 h-16 px-4 md:sticky md:top-0 md:border-b md:bg-background">
					<div className="flex items-center gap-2">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink asChild>
										<Link to="/hjem">Dashbord</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbLink asChild>
										<Link to="/sjekklister">Sjekklister</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>

								{/* ✅ Show separator and checklist title if ID is valid */}
								{checklist && <BreadcrumbSeparator />}
								{checklist && (
									<BreadcrumbItem>
										<BreadcrumbPage>{checklist.title}</BreadcrumbPage>
									</BreadcrumbItem>
								)}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className="ml-auto">
						<Avatar
							src="https://example.com/avatar1.jpg"
							alt="User 1"
							fallbackText="JD"
							size="md"
						/>
					</div>
				</header>
				<main className="overflow-hidden md:overflow-auto">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default ChecklistLayout;
