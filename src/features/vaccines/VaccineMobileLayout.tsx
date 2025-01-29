import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";

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
	chatMessages: { role: "user" | "AI"; text: string }[];
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
}) => {
	return (
		<div className="flex flex-col h-screen">
			{/* 🔍 Search Bar */}
			<div className="p-4">
				<Input
					placeholder="Søk på vaksiner..."
					className="w-full"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{/* 📌 Scrollable Content Area */}
			<div className="flex-1 overflow-hidden relative">
				<ScrollArea className="h-full">
					<div className="p-4 space-y-4">
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

				{/* ✅ Chat Window (Floating Over Vaccine Cards) */}
				{chatMessages.length > 0 && (
					<div className="absolute bottom-16 left-0 w-full p-4 z-10 bg-white shadow-lg rounded-t-lg">
						<h2 className="text-lg font-semibold text-gray-700 mb-2">
							Chat med AKI
						</h2>
						<div className="space-y-2 max-h-[200px] overflow-y-auto">
							{chatMessages.map((msg, index) => (
								<div
									key={index}
									className={`p-3 rounded-lg max-w-[80%] ${
										msg.role === "user"
											? "ml-auto bg-blue-500 text-white"
											: "bg-gray-100"
									}`}
								>
									{msg.text}
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			{/* ✅ Sticky Chat Input (Always at Bottom) */}
			<div className="sticky bottom-0 left-0 w-full bg-white p-4 shadow-md">
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
					<Button onClick={handleSendMessage}>Send</Button>
				</div>
			</div>
		</div>
	);
};

export default VaccineMobileLayout;
