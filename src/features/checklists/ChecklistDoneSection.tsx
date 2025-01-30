import { useState } from "react";
import { mockChecklists } from "@/data/mockChecklists";
import { FilterSection } from "./FilterSection";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ChecklistDoneSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockChecklists
			: mockChecklists.filter((c) => c.clinic === selectedClinic);

	return (
		<Card className="h-full w-full rounded-lg shadow-md">
			<CardContent className="p-0">
				<FilterSection
					title="Fullførte Sjekklister"
					description="Oversikt over alle fullførte sjekklister i systemet (eks. scroll horisontalt på mobil)"
					selectedClinic={selectedClinic}
					onClinicChange={setSelectedClinic}
				/>

				<div className="flex-1 min-h-0 overflow-auto">
					{/* Mobile horizontal scroll container */}
					<div className="flex gap-4 p-4 overflow-x-auto snap-x snap-mandatory md:hidden">
						{filteredChecklists
							.filter((c) => c.status === "ferdig")
							.map((checklist) => (
								<Card
									key={checklist.id}
									className="border-l-4 border-l-green-500 hover:shadow-lg transition-all min-w-[200px]"
								>
									<CardHeader className="flex items-start gap-2">
										<CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0" />
										<CardTitle className="text-base font-semibold">
											{checklist.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
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

					{/* Desktop grid layout */}
					<div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
						{filteredChecklists
							.filter((c) => c.status === "ferdig")
							.map((checklist) => (
								<Card
									key={checklist.id}
									className="border-l-4 border-l-green-500 hover:shadow-lg transition-all"
								>
									<CardHeader className="flex items-start gap-2">
										<CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0" />
										<CardTitle className="text-base font-semibold">
											{checklist.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
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
