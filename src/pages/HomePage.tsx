import NavCards from "@/features/homePage/NavCards";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<div className="text-center mt-28 md:mt-32 mb-6">
				<h1 className="text-4xl font-bold mb-2">Demonstrasjon av Apper</h1>
				<p className="text-lg text-gray-600">
					Dette er en demo for å vise frem app-ideer til Aleris
				</p>
			</div>
			<NavCards />
		</div>
	);
}
