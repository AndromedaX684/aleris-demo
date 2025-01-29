import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

// Expanded Vaccine List
const mockVaccines: Vaccine[] = [
	{
		id: 1,
		name: "Gulfeber",
		manufacturer: "Stamaril",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/gulfebervaksinasjon/?term=",
		notes:
			"• Må tas senest 10 dager før avreise\n• Levende vaksine\n• MÅ få vaksinekort for gulfeber med stempel og underskrift",
		injectionTechnique: "i.m",
		price: "kr380.00",
		interval: "-",
		duration: "Livslang beskyttelse",
	},
	{
		id: 2,
		name: "Tyfoidfeber",
		manufacturer: "Typhim VI",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/tyfoidvaksinasjon/?term=#tyfoidvaksiner",
		notes:
			"• Anbefales minst 2 uker før avreise\n• Smitter fra person til person, dårlig hygiene, forurenset vann/mat.",
		injectionTechnique: "i.m eller s.c",
		price: "kr236.00",
		interval: "-",
		duration: "3 år",
	},
	{
		id: 3,
		name: "Skogflåttencefalitt / TBE",
		manufacturer: "Ticovac",
		dose: "3 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/skogflattencefalittvaksinasjon/?term=",
		notes:
			"• 3 dose kan gis ved behov for lengre beskyttelse\n• Ved 2 doser kan mer enn 90% forvente beskyttelse for nåværende flåttsesong\n• Sykdommen smitter ikke mellom mennesker\n• Beskytter ikke mot borrelia",
		injectionTechnique: "i.m",
		price: "kr369.00",
		interval:
			"- 1-3 måneders\n- Intervallet mellom 1. og 2. dose kan reduseres til 14 dager hvis det er behov for rask beskyttelse.",
		duration: "2 doser gir varigheten for sesongen",
	},
	{
		id: 4,
		name: "Difteri, stivkrampe, kikhoste og polio",
		manufacturer: "Repevax",
		dose: "1 dose",
		fhiLink:
			"https://www.fhi.no/va/barnevaksinasjonsprogrammet/vaksinene-i-barnevaksinasjonsprogrammet/vaksine-mot-difteri-stivkrampe-kikhoste-og-poliomyelitt/",
		notes: "• Anbefalt hvert 10 år\n• IKKE grunnvaksine, kun oppfriskning",
		injectionTechnique: "i.m",
		price: "kr336.00",
		interval: "-",
		duration: "10 år",
	},
	{
		id: 5,
		name: "Denguefeber",
		manufacturer: "Qdenga",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/denguefeber/?term=",
		notes:
			"• Anbefalt senest 3 uker før avreise\n• Levende vaksine\n• 1 dose gir 80% beskyttelse, om man ikke rekker to doser er 1. før reise likevel bedre enn ingen\n• Ved flere vaksiner må denne settes alene / i annen arm\n• Anbefal DEET myggmiddel",
		injectionTechnique: "s.c",
		price: "kr977.00",
		interval: "3 måneder mellom dosene",
		duration: "-",
	},
	{
		id: 6,
		name: "Japansk Encefalitt",
		manufacturer: "Ixiaro",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/japansk-encefalittvaksinasjon/?term=",
		notes:
			"• Anbefal DEET myggmiddel\n• Bør settes minst én uke før avreise\n• Kan settes i kortere intervall ved tidsnød",
		injectionTechnique: "i.m",
		price: "kr892.00",
		interval: "28 dager",
		duration:
			"2 doser gir beskyttelse i minst 1 år. Boosterdose kan gis etter 12-24 måneder ved behov for lengre beskyttelse",
	},
	{
		id: 7,
		name: "Rabies",
		manufacturer: "Rabipur",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/rabiesvaksinasjon/?term=",
		notes: "-",
		injectionTechnique: "i.m",
		price: "kr815.00",
		interval: "Minimum 7 dager",
		duration: "Vurdering",
	},
	{
		id: 8,
		name: "Hepatitt A",
		manufacturer: "Havrix",
		dose: "2 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/hepatitt-a-vaksinasjon-og-normalt-immunglobulin/?term=",
		notes: "• Anbefales 1 måned før avreise.",
		injectionTechnique: "i.m",
		price: "kr308.00",
		interval: "Dose to tidligst etter 6. måneder.",
		duration: "1. dose = 1 år, 2. doser = flere tiår",
	},
	{
		id: 9,
		name: "Hepatitt B",
		manufacturer: "Engerix",
		dose: "3 doser",
		fhiLink:
			"https://www.fhi.no/va/vaksinasjonshandboka/vaksiner-mot-de-enkelte-sykdommene/hepatitt-b-vaksinasjon-og-immunglobulin/?term=",
		notes:
			"• Ved behov for rask beskyttelse kan et hurtigintervall benyttes: dag 0, dag 7 og dag 21. En fjerde dose anbefales etter 12 måneder.",
		injectionTechnique: "i.m",
		price: "kr266.00",
		interval:
			"Dose 2 tidligst 1 mnd etter første dose, og dose 3 tidligst 6 måneder etter første dose.",
		duration:
			"Etter fullvaksinasjon har man sannsynligvis livslang beskyttelse",
	},
];

export default function VaccineDashboard() {
	const [search, setSearch] = useState<string>("");
	const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null);
	const [chatMessages, setChatMessages] = useState<
		{ role: "user" | "AI"; text: string }[]
	>([]);
	const [message, setMessage] = useState("");
	const chatRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

	// Function to handle chat submission
	const handleSendMessage = () => {
		if (!message.trim()) return; // Prevent empty messages

		setChatMessages((prev) => [
			...prev,
			{ role: "user", text: message },
			{ role: "AI", text: "Dette er et AI-svar" }, // Mock AI response
		]);
		setMessage(""); // Clear input after sending
	};

	// ✅ Auto-scroll to the latest message when chat updates
	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [chatMessages]); // Runs every time chatMessages update

	// Filter vaccines based on search input
	const filteredVaccines = mockVaccines.filter((vaccine) =>
		vaccine.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="flex h-screen">
			{/* Left: Vaccine List */}
			<div className="w-1/3 flex flex-col gap-4 mb-10">
				<div className="pt-4 pl-4 pr-4">
					<Input
						placeholder="Search vaccines..."
						className="w-full"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<ScrollArea className="flex-1 pb-10">
					<div className="grid gap-4 p-4">
						{filteredVaccines.map((vaccine) => (
							<Card
								key={vaccine.id}
								className="cursor-pointer hover:shadow-lg transition-all"
								onClick={() => setSelectedVaccine(vaccine)}
							>
								<CardHeader>
									<CardTitle>{vaccine.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-gray-500">
										{vaccine.manufacturer}
									</p>
									<p className="text-sm">
										<strong>Dose:</strong> {vaccine.dose}
									</p>
									<p className="text-sm">
										<strong>Technique:</strong> {vaccine.injectionTechnique}
									</p>
									<p className="text-sm">
										<strong>Duration:</strong> {vaccine.duration}
									</p>
									<p className="text-green-600 font-semibold mt-2">
										{vaccine.price}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</ScrollArea>
			</div>

			{/* Right: Vaccine Details & Chat */}
			<div className="w-2/3 flex flex-col h-full border-l">
				{/* ✅ Notes Section (Always Visible at Top) */}
				<div className="h-1/2 overflow-auto p-4 relative">
					{/* ✅ Edit Button (Top Right Corner) */}
					<button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2">
						<Pencil className="h-5 w-5" />
					</button>

					{selectedVaccine ? (
						<div>
							<h2 className="text-2xl font-bold">{selectedVaccine.name}</h2>
							<p className="text-gray-500">{selectedVaccine.manufacturer}</p>
							<p className="mt-4 whitespace-pre-line">
								{selectedVaccine.notes}
							</p>
						</div>
					) : (
						<p className="text-gray-500">Select a vaccine to see details</p>
					)}
				</div>

				{/* ✅ Chat Window (Hidden by Default, Expands in Middle Section) */}
				{chatMessages.length > 0 && (
					<div className="flex flex-col flex-grow min-h-[200px] max-h-[40vh]">
						{/* ✅ Info Bar (Always at the Top) */}
						<div className="flex items-center justify-between px-4 py-2 border-b border-t rounded-t-2xl bg-white">
							<h2 className="text-lg font-semibold">Snakker med AKI</h2>
							<button
								onClick={() => setChatMessages([])}
								className="text-gray-500 hover:text-gray-700"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* ✅ Chat Messages (Auto-scrolls to latest message) */}
						<ScrollArea className="flex-grow p-4 overflow-y-auto">
							<div className="space-y-2">
								{chatMessages.map((msg, index) => (
									<div
										key={index}
										className={`p-3 rounded-lg max-w-xs text-sm ${
											msg.role === "user"
												? "bg-accent text-white ml-auto self-end"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										{msg.text}
									</div>
								))}
								{/* ✅ Move chatRef here to track the latest message */}
								<div ref={chatRef} />
							</div>
						</ScrollArea>
					</div>
				)}

				{/* ✅ Chat Input Box (Always at the Bottom) */}
				<div className="flex flex-col mt-auto pb-16">
					<div className="border-t">
						<CardHeader>
							<CardTitle>
								Snakk med AKI{" "}
								<span className="text-xs">(Aleris Kunstig Intelligens)</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex items-center gap-2">
								<Input
									placeholder="Hva kan jeg hjelpe til med?"
									className="flex-1"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // ✅ Enter to send
								/>
								<Button variant={"accent"} onClick={handleSendMessage}>
									Send
								</Button>
							</div>
						</CardContent>
					</div>
				</div>
			</div>
		</div>
	);
}
