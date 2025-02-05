import NavCards from "@/components/homepage/NavCards";

export default function HomePage() {
	return (
		<div className="flex flex-col my-16">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-2">Demonstrasjon av Apper</h1>
				<p className="text-lg text-gray-600">
					Dette er en demo for å vise frem app-ideer for Aleris
				</p>
			</div>
			<NavCards />
		</div>
	);
}
