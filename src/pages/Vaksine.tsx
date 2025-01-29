import { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import VaccineMobileLayout from "@/features/vaccines/VaccineMobileLayout";
import VaccineDesktopLayout from "@/features/vaccines/VaccinesDesktopLayout";
import { mockVaccines } from "@/data/VaccineData";

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

const VaccinePage: React.FC = () => {
	const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null);
	const [search, setSearch] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [chatMessages, setChatMessages] = useState<
		{ role: "user" | "AI"; text: string }[]
	>([]);
	const [isClient, setIsClient] = useState<boolean>(false);
	const [chatVisible, setChatVisible] = useState(false); // ✅ Controls chat visibility

	// ✅ Ensures SSR does not mismatch
	useEffect(() => {
		setIsClient(true);
	}, []);

	// ✅ Safe check for SSR before using `useMediaQuery`
	const isMobile = useMediaQuery(
		{ query: "(max-width: 768px)" },
		undefined,
		(matches) => matches
	);

	// Define the correct TypeScript type for chat messages
	type ChatMessage = { role: "user" | "AI"; text: string };

	// ✅ List of random AI responses
	const aiResponses: ChatMessage[] = [
		{ role: "AI", text: "Jeg forstår! Kan du utdype mer?" },
		{ role: "AI", text: "Interessant! Fortell meg mer." },
		{ role: "AI", text: "Det høres ut som en god idé!" },
		{ role: "AI", text: "Hvordan kan jeg hjelpe deg videre?" },
		{
			role: "AI",
			text: "Beklager, jeg er ikke sikker på det. Kan du prøve å omformulere?",
		},
		{ role: "AI", text: "La meg tenke... Jeg tror dette kan hjelpe deg!" },
		{
			role: "AI",
			text: "Det er en vanlig bekymring. Har du vurdert alternative løsninger?",
		},
		{ role: "AI", text: "Flott spørsmål! Dette kan være en mulig tilnærming." },
		{
			role: "AI",
			text: "Jeg tror du er inne på noe. Kan du forklare litt mer?",
		},
		{ role: "AI", text: "Spennende! Hva tenker du om dette som en løsning?" },
	];

	// ✅ Handles sending messages in the chat
	const handleSendMessage = () => {
		if (!message.trim()) return;

		// Create user message
		const newUserMessage: ChatMessage = { role: "user", text: message };

		// Select a random AI response
		const aiMessage: ChatMessage =
			aiResponses[Math.floor(Math.random() * aiResponses.length)];

		// ✅ Ensure chat becomes visible when the user sends a message
		setChatVisible(true);

		// Update state with user message immediately
		setChatMessages((prevMessages: ChatMessage[]) => [
			...prevMessages,
			newUserMessage,
		]);
		setMessage("");

		// Simulate AI response delay (500ms)
		setTimeout(() => {
			setChatMessages((prevMessages: ChatMessage[]) => [
				...prevMessages,
				aiMessage,
			]);
		}, 400);
	};

	// ✅ Filters vaccines based on name and manufacturer
	const filteredVaccines = useMemo(
		() =>
			mockVaccines.filter(
				(v) =>
					v.name.toLowerCase().includes(search.toLowerCase()) ||
					v.manufacturer.toLowerCase().includes(search.toLowerCase())
			),
		[search]
	);

	// ✅ Determines which layout to render
	const layout = useMemo(() => {
		if (!isClient) return null;

		const LayoutComponent = isMobile
			? VaccineMobileLayout
			: VaccineDesktopLayout;

		return (
			<LayoutComponent
				vaccines={filteredVaccines}
				selectedVaccine={selectedVaccine}
				setSelectedVaccine={setSelectedVaccine}
				search={search}
				setSearch={setSearch}
				message={message}
				setMessage={setMessage}
				handleSendMessage={handleSendMessage}
				chatMessages={chatMessages}
				chatVisible={chatVisible}
				setChatVisible={setChatVisible} // ✅ Pass visibility state to layout
			/>
		);
	}, [
		isClient,
		isMobile,
		filteredVaccines,
		selectedVaccine,
		search,
		message,
		chatMessages,
		chatVisible, // ✅ Track chat visibility
	]);

	return layout;
};

export default VaccinePage;
