import { useState } from "react";
import { mockChecklists } from "@/data/mockChecklists";
import { FilterSection } from "./FilterSection";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ChecklistDoneSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockChecklists
			: mockChecklists.filter((c) => c.clinic === selectedClinic);

	return (
		<div className="flex flex-col h-full bg-white rounded-xl shadow-md">
			<FilterSection
				title="Fullførte Sjekklister"
				description="Oversikt over alle fullførte sjekklister i systemet (eks. scroll horisontalt på mobil)"
				selectedClinic={selectedClinic}
				onClinicChange={setSelectedClinic}
			/>

			<div className="flex-1 min-h-0 overflow-auto ">
				{/* Mobile horizontal scroll container */}
				<div className="flex gap-4 p-4 overflow-x-auto snap-x snap-mandatory md:hidden">
					{filteredChecklists
						.filter((c) => c.status === "ferdig")
						.map((checklist) => (
							<div
								key={checklist.id}
								className="rounded-lg bg-white p-4 shadow hover:shadow-md transition-all border border-muted border-l-4 border-l-green-500"
							>
								<div className="flex items-start gap-2">
									<CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0" />
									<h3 className="text-base font-semibold truncate">
										{checklist.title}
									</h3>
								</div>
								<div className="mt-2 flex items-center justify-between text-sm text-gray-600">
									<span className="truncate">{checklist.clinic}</span>
									<span className="rounded px-2 py-1 text-xs bg-green-100 text-green-800">
										Fullført
									</span>
								</div>
								<div className="mt-2 flex items-center justify-between text-xs">
									<span className="text-gray-500">Fullført:</span>
									<span className="text-gray-700 truncate">
										{checklist.lastUpdated}
									</span>
								</div>
							</div>
						))}
				</div>

				{/* Desktop grid layout */}
				<div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
					{filteredChecklists
						.filter((c) => c.status === "ferdig")
						.map((checklist) => (
							<div
								key={checklist.id}
								className="rounded-lg bg-white p-4 shadow hover:shadow-md transition-all border border-muted border-l-4 border-l-green-500"
							>
								<div className="flex items-start gap-2">
									<CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0" />
									<h3 className="text-base font-semibold">{checklist.title}</h3>
								</div>
								<div className="mt-2 flex items-center justify-between text-sm text-gray-600">
									<span>{checklist.clinic}</span>
									<span className="rounded px-2 py-1 text-xs bg-green-100 text-green-800">
										Fullført
									</span>
								</div>
								<div className="mt-2 flex items-center justify-between text-sm">
									<span className="text-gray-500">Fullført:</span>
									<span className="text-gray-700">{checklist.lastUpdated}</span>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
