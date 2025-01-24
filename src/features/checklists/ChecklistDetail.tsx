// components/ChecklistDetail.tsx
import { useParams, useNavigate } from "react-router";
import { mockDataDetails } from "@/data/mockDataDetails";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolidIcon } from "@heroicons/react/24/solid";

export function ChecklistDetail() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [completedCheckpoints, setCompletedCheckpoints] = useState<Set<number>>(
		new Set()
	);

	const checklist = mockDataDetails.find((c) => c.id === id);

	useEffect(() => {
		if (checklist?.checkpoints) {
			// Initialize completed checkpoints
			const initialCompleted = new Set<number>();
			setCompletedCheckpoints(initialCompleted);
		}
	}, [checklist]);

	const toggleCheckpoint = (index: number) => {
		const newCompleted = new Set(completedCheckpoints);
		if (newCompleted.has(index)) {
			newCompleted.delete(index);
		} else {
			newCompleted.add(index);
		}
		setCompletedCheckpoints(newCompleted);
	};

	if (!checklist) {
		return (
			<div className="p-4 text-red-500">
				<button
					onClick={() => navigate(-1)}
					className="mb-6 flex items-center gap-2 text-blue-500 hover:text-blue-600"
				>
					<ArrowLeftIcon className="h-5 w-5" />
					<span>Tilbake til oversikt</span>
				</button>
				Sjekkliste ikke funnet
			</div>
		);
	}

	return (
		<div className="p-4">
			<button
				onClick={() => navigate(-1)}
				className="mb-6 flex items-center gap-2 text-blue-500 hover:text-blue-600"
			>
				<ArrowLeftIcon className="h-5 w-5" />
				<span>Tilbake til oversikt</span>
			</button>

			<div className="bg-white rounded-lg shadow-sm p-6 mb-6">
				<h1 className="text-2xl font-bold mb-4">{checklist.title}</h1>
				<div className="">
					<div>
						<div className="mb-6">
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium text-blue-600">
									Fremdrift ({completedCheckpoints.size}/
									{checklist.checkpoints?.length || 0})
								</span>
								<span className="text-sm font-medium text-blue-600">
									{Math.round(
										(completedCheckpoints.size /
											(checklist.checkpoints?.length || 1)) *
											100
									)}
									%
								</span>
							</div>

							{/* Progress Bar */}
							<div
								className="h-3 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={Math.round(
									(completedCheckpoints.size /
										(checklist.checkpoints?.length || 1)) *
										100
								)}
								aria-valuemin={0}
								aria-valuemax={100}
							>
								<div
									className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
									style={{
										width: `${
											(completedCheckpoints.size /
												(checklist.checkpoints?.length || 1)) *
											100
										}%`,
										// Color transitions from red to blue to green based on progress
										backgroundColor: `hsl(${
											(completedCheckpoints.size /
												(checklist.checkpoints?.length || 1)) *
											120
										}, 90%, 45%)`,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-lg shadow-sm p-6">
				<h2 className="text-xl font-semibold mb-4">Kontrollpunkt</h2>
				<div className="space-y-2">
					{checklist.checkpoints?.map((checkpoint, index) => (
						<div
							key={index}
							onClick={() => toggleCheckpoint(index)}
							className={`p-3 border rounded-lg cursor-pointer transition-all ${
								completedCheckpoints.has(index)
									? "bg-green-50 border-l-4 border-green-500"
									: "hover:bg-gray-50"
							}`}
						>
							<div className="flex items-center gap-4">
								{completedCheckpoints.has(index) ? (
									<CheckCircleSolidIcon className="h-6 w-6 text-green-500" />
								) : (
									<CheckCircleIcon className="h-6 w-6 text-gray-300" />
								)}
								<div className="flex-1">
									<p
										className={`text-gray-800 ${
											completedCheckpoints.has(index)
												? "line-through text-gray-500"
												: ""
										}`}
									>
										{checkpoint.title}
									</p>
									{checkpoint.notes && (
										<p className="text-sm text-gray-500 mt-1">
											{checkpoint.notes}
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
