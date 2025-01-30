import { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Pencil } from "lucide-react";

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

const VaccineDesktopLayout: React.FC<VaccineLayoutProps> = ({
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
	// ✅ Move `useRef` inside the component
	const chatRef = useRef<HTMLDivElement>(null);

	// ✅ Move `useEffect` inside the component
	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [chatMessages]); // ✅ Runs every time chatMessages updates

	return (
		<div className="flex flex-row h-screen">
			{/* ✅ Left: Vaccine List */}
			<div className="w-1/3 flex flex-col gap-4 border-r">
				<div className="pt-4 pl-4 pr-4">
					<Input
						placeholder="Søk på vaksiner..."
						className="w-full "
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				<ScrollArea className="flex-1 mb-10">
					<div className="grid gap-4 px-4 mb-10">
						{vaccines.map((vaccine) => (
							<Card
								key={vaccine.id}
								className="text-lg cursor-pointer hover:shadow-lg transition-all"
								onClick={() => setSelectedVaccine(vaccine)}
							>
								<CardHeader>
									<CardTitle>{vaccine.name}</CardTitle>
									<p className="text-accent text-2xl">{vaccine.manufacturer}</p>
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
				</ScrollArea>
			</div>

			{/* ✅ Right: Vaccine Details & Chat */}
			<div className="w-full md:w-2/3 flex flex-col p-4 h-full">
				{/* ✅ Vaccine Details Section */}
				<div className="flex-1 overflow-auto relative p-4 border rounded-lg bg-white shadow mb-4">
					{selectedVaccine ? (
						<>
							{/* ✅ Edit Button (Only when there is a note) */}
							{selectedVaccine.notes && (
								<button
									onClick={() => console.log("Edit clicked")} // Replace with actual edit function
									className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
								>
									<Pencil className="w-5 h-5 text-gray-600" />
								</button>
							)}

							<h2 className="text-2xl font-bold">{selectedVaccine.name}</h2>
							<p className="text-gray-500">{selectedVaccine.manufacturer}</p>
							<p className="mt-4 whitespace-pre-line">
								{selectedVaccine.notes}
							</p>
						</>
					) : (
						<div className="flex items-center justify-center h-full">
							<p className="text-gray-500">Velg en vaksine for detaljer</p>
						</div>
					)}
				</div>

				{/* ✅ Chat Window (Only Appears When Chat is Active) */}
				{chatVisible && (
					<div className="flex flex-col rounded-t-2xl border overflow-hidden bg-white shadow-md max-h-[60vh] min-h-[400px]">
						{/* ✅ Chat Header */}
						<div className="flex justify-between px-4 py-4 bg-white border-b overflow-hidden">
							<h2 className="text-sm font-semibold">Snakker med AKI</h2>
							<button
								onClick={() => setChatVisible(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* ✅ Chat Messages (Scrollable) */}
						<ScrollArea className="p-4 flex-1 overflow-y-auto mb-10">
							<div className="space-y-4">
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
				<div className="sticky bottom-0 left-0 w-full bg-white p-4 pb-6 shadow-md border">
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

export default VaccineDesktopLayout;
