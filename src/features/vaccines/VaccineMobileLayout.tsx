import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, X, Pencil } from "lucide-react";

type Vaccine = {
	id: number;
	name: string;
	manufacturer: string;
	dose: string;
	fhiLink: string;
	notes: string;
	injectionTechnique: string;
	price: string;
	interval: string;
	duration: string;
};

type VaccineLayoutProps = {
	vaccines: Vaccine[];
	selectedVaccine: Vaccine | null;
	setSelectedVaccine: (vaccine: Vaccine | null) => void;
	search: string;
	setSearch: (search: string) => void;
	message: string;
	setMessage: (message: string) => void;
	handleSendMessage: () => void;
	chatMessages: any[];
	chatVisible: boolean;
	setChatVisible: (visible: boolean) => void;
};

const VaccineMobileLayout: React.FC<VaccineLayoutProps> = ({
	vaccines,
	selectedVaccine,
	setSelectedVaccine,
	search,
	setSearch,
	message,
	setMessage,
	handleSendMessage,
	chatMessages,
	chatVisible,
	setChatVisible,
}) => {
	const chatRef = useRef<HTMLDivElement>(null);

	// ✅ Auto-scroll to the latest message
	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [chatMessages]);

	return (
		<div className="flex flex-col h-screen">
			{/* 🔍 Search Bar */}
			<div className="p-4 sticky top-0 bg-white z-10 shadow-md">
				<Input
					placeholder="Søk på vaksiner..."
					className="w-full"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{/* ✅ Main Content (Scrollable Vaccine List & Chat Overlay) */}
			<div className="flex-1 relative overflow-hidden">
				<ScrollArea className="h-full">
					<div className="px-4 pt-4 pb-44 space-y-4">
						{/* ✅ Vaccine Details OR Vaccine List */}
						{selectedVaccine ? (
							<>
								{/* Back Button */}
								<div className="flex items-center gap-2">
									<Button
										variant="ghost"
										size="icon"
										onClick={() => setSelectedVaccine(null)}
									>
										<ArrowLeft className="h-4 w-4" />
									</Button>
									<h2 className="text-xl font-bold">{selectedVaccine.name}</h2>
								</div>

								{/* Vaccine Details */}
								<Card>
									<CardContent className="pt-4">
										<p className="text-gray-500">
											{selectedVaccine.manufacturer}
										</p>
										<p className="mt-4 whitespace-pre-line">
											{selectedVaccine.notes}
										</p>
									</CardContent>
									<button
										onClick={() => console.log("Edit clicked")} // Replace with actual edit function
										className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-300 transition"
									>
										<Pencil className="w-5 h-5" />
									</button>
								</Card>
							</>
						) : (
							// Vaccine List
							<div className="grid gap-4">
								{vaccines.map((vaccine) => (
									<Card
										key={vaccine.id}
										className="cursor-pointer hover:shadow-lg transition-all"
										onClick={() => setSelectedVaccine(vaccine)}
									>
										<CardHeader>
											<CardTitle>{vaccine.name}</CardTitle>
											<p className="text-accent text-sm">
												{vaccine.manufacturer}
											</p>
										</CardHeader>
										<CardContent>
											<p className="text-sm">
												<strong>Dose:</strong> {vaccine.dose}
											</p>
											<p className="text-sm">
												<strong>Technique:</strong> {vaccine.injectionTechnique}
											</p>
											<p className="text-sm">
												<strong>Duration:</strong> {vaccine.duration}
											</p>
											<p className="text-accent font-semibold mt-2">
												{vaccine.price}
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						)}
					</div>
				</ScrollArea>

				{/* ✅ Floating Chat Window (Above Vaccine List) */}
				{chatVisible && (
					<div className="fixed bottom-20 left-0 w-full max-h-[50vh] min-h-[300px] bg-white shadow-md rounded-t-2xl border overflow-y-auto">
						{/* ✅ Chat Header */}
						<div className="flex justify-between px-4 py-4 bg-white border-b sticky top-0 z-10">
							<h2 className="text-sm font-semibold">Snakk med AKI</h2>
							<button
								onClick={() => setChatVisible(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* ✅ Chat Messages (Scrollable) */}
						<ScrollArea className="p-4 flex-1 overflow-y-auto">
							<div className="space-y-8">
								{chatMessages.map((msg, index) => (
									<div
										key={index}
										className={`p-3 rounded-lg text-sm max-w-[80%] ${
											msg.role === "user"
												? "ml-auto bg-accent text-white"
												: "bg-gray-100"
										}`}
									>
										{msg.text}
									</div>
								))}
								{/* ✅ Invisible div at the bottom to force scrolling */}
								<div ref={chatRef} />
							</div>
						</ScrollArea>
					</div>
				)}

				{/* ✅ Sticky Chat Input (Always at Bottom) */}
				<div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md border">
					<div className="text-sm text-gray-500 mb-2">
						Snakk med AKI{" "}
						<span className="text-xs">(Aleris Kunstig Intelligens)</span>
					</div>

					<div className="flex gap-2">
						<Input
							placeholder="Hva kan jeg hjelpe til med?"
							className="flex-1"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
						/>
						<Button variant={"accent"} onClick={handleSendMessage}>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VaccineMobileLayout;
