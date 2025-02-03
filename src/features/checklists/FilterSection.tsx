import { Badge } from "@/components/ui/badge";
import { clinics } from "@/data/mockChecklists";

interface FilterSectionProps {
	selectedClinic: string;
	onClinicChange: (clinic: string) => void;
	title?: string;
	description?: string;
	headerAction?: React.ReactNode;
}

export function FilterSection({
	selectedClinic,
	onClinicChange,
	title,
	description,
	headerAction,
}: FilterSectionProps) {
	return (
		<div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-2 border-b rounded-t-lg">
			<div className="mb-4">
				{title && (
					<div className="flex items-center justify-between mb-2">
						{" "}
						{/* Reduced mb */}
						{/* Title + Description container */}
						<div className="flex flex-col">
							<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
							{description && (
								<p className="text-sm text-gray-500 mt-1">{description}</p>
							)}
						</div>
						{headerAction}
					</div>
				)}
				<div className="flex gap-2 overflow-x-auto pb-2">
					<Badge
						onClick={() => onClinicChange("All")}
						className={`rounded-full ${
							selectedClinic === "All"
								? "bg-accent text-white"
								: "bg-gray-100 text-gray-700 hover:bg-gray-200"
						}`}
					>
						Alle
					</Badge>
					{clinics.map((clinic) => (
						<Badge
							key={clinic}
							onClick={() => onClinicChange(clinic)}
							className={`rounded-full ${
								selectedClinic === clinic
									? "bg-accent text-white"
									: "bg-gray-100 text-accent-700 hover:bg-gray-200"
							}`}
						>
							{clinic}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
}
