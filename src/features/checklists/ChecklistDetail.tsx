import { useParams, useNavigate } from "react-router";
import { mockDataDetails } from "@/data/mockDataDetails";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon as CheckCircleSolidIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ChecklistDetail() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [completedCheckpoints, setCompletedCheckpoints] = useState<Set<number>>(
		new Set()
	);

	const checklist = mockDataDetails.find((c) => c.id === id);

	useEffect(() => {
		if (checklist?.checkpoints) {
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

			{/* ✅ Header Section - Uses ShadCN Card */}
			<Card className="sticky top-0 z-10 bg-white shadow-md border-b mb-6">
				<CardHeader className="flex items-center justify-between">
					<CardTitle>{checklist.title}</CardTitle>
				</CardHeader>

				<CardContent>
					<div className="mb-6">
						{/* ✅ Progress Bar Header */}
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

						{/* ✅ Progress Bar */}
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
									backgroundColor: `hsl(${
										(completedCheckpoints.size /
											(checklist.checkpoints?.length || 1)) *
										120
									}, 90%, 45%)`,
								}}
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* ✅ Checklist Checkpoints - Uses ShadCN Card */}
			<Card>
				<CardHeader>
					<CardTitle>Kontrollpunkt</CardTitle>
				</CardHeader>
				<CardContent>
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
				</CardContent>
			</Card>
		</div>
	);
}
