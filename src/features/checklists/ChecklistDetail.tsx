import { useParams, useNavigate } from "react-router";
import { mockDataDetails } from "@/data/mockDataDetails";
import { useState, useEffect } from "react";
import {
	ArrowLeftIcon,
	CheckCircleIcon,
	CameraIcon,
	SignatureIcon,
	CalendarIcon,
	MicIcon,
	BarcodeIcon,
	FileTextIcon,
	HashIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import Avatar from "@/components/ui/avatar";

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

	// ✅ Handle checklist submission with confetti
	const handleCompleteChecklist = () => {
		confetti({
			particleCount: 350, // 🎉 Number of confetti particles
			spread: 180, // 🎉 Spread angle
			origin: { y: 0.6 }, // 🎉 Fire from middle of screen
		});
	};

	// ✅ Define Icons Based on Checkpoint Type
	const getCheckpointIcon = (type: string) => {
		switch (type) {
			case "checkmark":
				return <CheckCircleIcon className="h-6 w-6 text-gray-500" />;
			case "photo":
				return <CameraIcon className="h-6 w-6 text-gray-500" />;
			case "signature":
				return <SignatureIcon className="h-6 w-6 text-gray-500" />;
			case "text":
				return <FileTextIcon className="h-6 w-6 text-gray-500" />;
			case "numeric":
				return <HashIcon className="h-6 w-6 text-gray-500" />;
			case "date":
				return <CalendarIcon className="h-6 w-6 text-gray-500" />;
			case "voice":
				return <MicIcon className="h-6 w-6 text-gray-500" />;
			case "barcode":
				return <BarcodeIcon className="h-6 w-6 text-gray-500" />;
			default:
				return <CheckCircleIcon className="h-6 w-6 text-gray-500" />;
		}
	};

	if (!checklist) {
		return (
			<div className="p-4 text-red-500">
				<button
					onClick={() => navigate(-1)}
					className="mb-6 flex items-center gap-2 text-accent hover:text-accent-600"
				>
					<ArrowLeftIcon className="h-5 w-5" />
					<span>Tilbake til oversikt</span>
				</button>
				Sjekkliste ikke funnet
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 pb-24 pt-48 px-4">
			{/* ✅ Fixed Header */}
			<Card className="fixed top-0 left-0 right-0 z-20 bg-white/30 backdrop-blur-md shadow-md border-b rounded-none">
				<CardHeader className="flex items-center justify-center py-3 relative">
					<button
						onClick={() => navigate(-1)}
						className="absolute left-4 text-accent hover:text-accent-600"
					>
						<ArrowLeftIcon className="h-5 w-5" />
					</button>
					<div className="text-center">
						<CardTitle className="text-xl font-semibold">
							{checklist.title}
						</CardTitle>
						<div className="flex items-center justify-center gap-2 text-sm text-gray-500">
							<span>Gjennomføres av Dr. John Doe</span>
							<Avatar className="h-8 w-8" />
						</div>
						<p className="text-sm text-gray-500">12.01.2025 kl.13:37</p>
					</div>
				</CardHeader>
				<CardContent>
					<div>
						{/* ✅ Progress Bar Header */}
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm font-medium text-accent">
								Fremdrift ({completedCheckpoints.size}/
								{checklist.checkpoints?.length || 0})
							</span>
							<span className="text-sm font-medium text-accent">
								{Math.round(
									(completedCheckpoints.size /
										(checklist.checkpoints?.length || 1)) *
										100
								)}
								%
							</span>
						</div>

						{/* ✅ Progress Bar */}
						<div className="h-3 bg-gray-200 rounded-full overflow-hidden">
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

			{/* ✅ Scrollable Content */}
			<div className="overflow-auto">
				<Card>
					<CardHeader className="border-b">
						<CardTitle className="text-lg font-medium">
							Kontrollpunkter
						</CardTitle>
					</CardHeader>
					<CardContent className="p-4">
						<div className="space-y-2">
							{checklist.checkpoints?.map((checkpoint, index) => (
								<div
									key={index}
									onClick={() => toggleCheckpoint(index)}
									className={`p-3 border rounded-lg cursor-pointer transition-all flex items-center justify-between ${
										completedCheckpoints.has(index)
											? "bg-green-50 border-l-4 border-green-500"
											: "hover:bg-gray-50"
									}`}
								>
									<div className="flex items-center gap-4">
										{/* ✅ Show Checkmark for Completed Items */}
										{completedCheckpoints.has(index) ? (
											<CheckCircleIcon className="h-6 w-6 text-green-500" />
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
									<div className="flex items-center gap-2">
										<span className="text-xs text-gray-400">
											{checkpoint.description}
										</span>
										{/* ✅ Display Input Type Icon */}
										{getCheckpointIcon(checkpoint.type)}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* ✅ Fixed Footer Button */}
			<Card className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-md border-t p-4 z-20 rounded-none flex justify-center">
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="accent" size="lg" className="w-full max-w-md">
							Fullfør og Send inn Sjekkliste
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								Kontroller at listen er gjennomført!
							</AlertDialogTitle>
							<AlertDialogDescription>
								Her er en oversikt over hva som er gjennomført og av hvem.
							</AlertDialogDescription>
							<AlertDialogDescription>
								Kontrollpunkt: ({completedCheckpoints.size}/
								{checklist.checkpoints?.length || 0}) |{" "}
								{Math.round(
									(completedCheckpoints.size /
										(checklist.checkpoints?.length || 1)) *
										100
								)}
								%
							</AlertDialogDescription>
							<AlertDialogDescription>
								Utført av: Roger den 12.01.2025 kl.13:42
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter className="gap-2">
							<AlertDialogCancel className="text-sm">Tilbake</AlertDialogCancel>
							<AlertDialogAction
								className="bg-accent hover:bg-accent-600"
								onClick={handleCompleteChecklist}
							>
								Signer og Fullfør
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</Card>
		</div>
	);
}
