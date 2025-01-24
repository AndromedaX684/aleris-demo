import { useState } from "react";
import { Link } from "react-router";
import { mockDataLists } from "@/data/mockDataLists";
import { FilterSection } from "./FilterSection";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

export default function ChecklistOverviewSection() {
	const [selectedClinic, setSelectedClinic] = useState<string>("All");

	const filteredChecklists =
		selectedClinic === "All"
			? mockDataLists
			: mockDataLists.filter((c) => c.clinic === selectedClinic);

	return (
		<div className="flex flex-col h-full bg-white rounded-xl shadow-sm">
			<FilterSection
				title="Alle Sjekklister"
				description="Oversikt over alle tilgjengelige sjekklister"
				selectedClinic={selectedClinic}
				onClinicChange={setSelectedClinic}
				headerAction={
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm">
						Ny Sjekkliste
					</button>
				}
			/>

			<div className="flex-1 min-h-0 overflow-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					{filteredChecklists.map((checklist) => (
						<Link
							to={`/checklist/${checklist.id}`}
							key={checklist.id}
							className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md border-l-2 border-blue-500"
						>
							<div className="flex items-start gap-2">
								<ClipboardDocumentListIcon className="h-5 w-5 text-blue-500 shrink-0" />
								<div className="flex-1">
									<h3 className="text-base font-semibold truncate">
										{checklist.title}
									</h3>
									<div className="mt-2 flex items-center justify-between text-sm text-gray-600">
										<span className="truncate">{checklist.clinic}</span>
										<span className="rounded px-2 py-1 text-xs bg-blue-100 text-blue-800">
											{checklist.checkpointAmount} KP
										</span>
									</div>
									<div className="mt-2 flex items-center justify-between text-xs">
										<span className="text-gray-500">Type:</span>
										<span className="text-gray-700 truncate">
											{checklist.type}
										</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
