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
				<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-inherit">
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
					<div>
						<Avatar
							src="https://example.com/avatar1.jpg"
							alt="User 1"
							fallbackText="JD"
							size="md"
						/>
					</div>
				</header>
				<main className="flex-1 flex flex-col min-h-0 overflow-auto">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default ChecklistLayout;
