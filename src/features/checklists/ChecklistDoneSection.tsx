import { useState } from "react";
import { mockChecklists } from "@/data/mockChecklists";
import { FilterSection } from "./FilterSection";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Avatar from "@/components/ui/avatar";

export default function ChecklistDoneSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockChecklists
			: mockChecklists.filter((c) => c.clinic === selectedClinic);

	return (
		<Card className="overflow-auto scrollbar-hidden max-h-[calc(100dvh)] md:max-h-[calc(100vh-64px)]">
			<CardContent className="p-0">
				<FilterSection
					title="Fullførte Sjekklister"
					description="Oversikt over alle fullførte sjekklister i systemet"
					selectedClinic={selectedClinic}
					onClinicChange={setSelectedClinic}
				/>

				<div className="flex-1 min-h-0 overflow-auto">
					<div className="flex flex-col gap-4 p-4">
						{filteredChecklists
							.filter((c) => c.status === "ferdig")
							.map((checklist) => (
								<Card
									key={checklist.id}
									className="border-l-4 border-l-green-500 hover:shadow-lg transition-all"
								>
									<CardHeader className="flex flex-row items-start gap-2">
										<CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mt-2" />
										<CardTitle className="text-base font-semibold">
											{checklist.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-between text-sm text-gray-600 mb-4">
											<span className="text-gray-500">Gjennomført av:</span>
											<div className="flex items-center gap-2">
												<div>{checklist.employee}</div>
												<Avatar className="h-6 w-6" />
											</div>
										</div>
										<div className="flex items-center justify-between text-sm text-gray-600">
											<span>{checklist.clinic}</span>
											<span className="rounded px-2 py-1 text-xs bg-green-100 text-green-800">
												Fullført
											</span>
										</div>
										<div className="mt-2 flex items-center justify-between text-sm">
											<span className="text-gray-500">Fullført:</span>
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
