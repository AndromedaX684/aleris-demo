import { useState } from "react";
import { mockChecklists } from "@/data/mockChecklists";
import { FilterSection } from "./FilterSection";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Avatar from "@/components/ui/avatar";

export default function ChecklistDoneSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockChecklists
			: mockChecklists.filter((c) => c.clinic === selectedClinic);

	return (
		<Card className="h-full w-full rounded-lg">
			<CardContent className="p-0">
				<FilterSection
					title="Aktive Sjekklister"
					description="Sjekklister som er aktive i systemet"
					selectedClinic={selectedClinic}
					onClinicChange={setSelectedClinic}
				/>

				<div className="flex-1 min-h-0 overflow-auto">
					{/* Mobile horizontal scroll container */}
					<div className="flex gap-4 p-4 overflow-x-auto snap-x snap-mandatory">
						{filteredChecklists
							.filter((c) => c.status === "aktiv")
							.map((checklist) => (
								<Card
									key={checklist.id}
									className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-all min-w-[220px] max-w-[250px]"
								>
									<CardHeader className="flex flex-row items-start gap-2">
										<PencilIcon className="h-5 w-5 text-yellow-500 shrink-0 mt-3" />
										<CardTitle className="text-base font-semibold">
											{checklist.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-between text-sm text-gray-600 mb-4">
											<span className="text-gray-500">Startet av:</span>
											<div className="flex items-center gap-2">
												<div>{checklist.employee}</div>
												<Avatar className="h-6 w-6" />
											</div>
										</div>
										<div className="flex items-center justify-between text-sm text-gray-600">
											<span>{checklist.clinic}</span>
											<span className="rounded px-2 py-1 text-xs bg-yellow-100 text-yellow-800">
												Aktiv
											</span>
										</div>
										<div className="mt-2 flex items-center justify-between text-sm">
											<span className="text-gray-500">Startet:</span>
											<span className="text-gray-700">
												{checklist.lastUpdated}
											</span>
										</div>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
