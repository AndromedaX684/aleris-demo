import { useState } from "react";
import { Link } from "react-router";
import { mockDataLists } from "@/data/mockDataLists";
import { FilterSection } from "./FilterSection";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ChecklistOverviewSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockDataLists
			: mockDataLists.filter((c) => c.clinic === selectedClinic);

	return (
		<Card className="h-full w-full rounded-lg shadow-lg">
			<CardContent className="p-0">
				<FilterSection
					title="Alle Sjekklister"
					description="Oversikt over alle tilgjengelige sjekklister"
					selectedClinic={selectedClinic}
					onClinicChange={setSelectedClinic}
					headerAction={
						<Button variant="accent" className="text-sm">
							Ny Sjekkliste
						</Button>
					}
				/>

				<div className="flex-1 min-h-0 overflow-auto">
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
						{filteredChecklists.map((checklist) => (
							<Link to={`/sjekklister/${checklist.id}`} key={checklist.id}>
								<Card className="hover:shadow-lg transition-all">
									<CardHeader className="flex items-start gap-2">
										<ClipboardDocumentListIcon className="h-5 w-5 text-blue-500 shrink-0" />
										<CardTitle className="text-base font-semibold">
											{checklist.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-between text-sm text-gray-600">
											<span className="truncate">{checklist.clinic}</span>
											<span className="rounded px-2 py-1 text-xs bg-blue-100 text-blue-800">
												{checklist.checkpointAmount} P
											</span>
										</div>
										<div className="mt-2 flex items-center justify-between text-xs">
											<span className="text-gray-500">Type:</span>
											<span className="text-gray-700 truncate">
												{checklist.type}
											</span>
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
