export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<h1 className="text-4xl font-bold mb-4">Demonstrasjon av Apper</h1>
			<p className="text-lg mb-8">
				Dette er en demo for a vise frem app ideer for Aleris{" "}
			</p>
			<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				Get Started
			</button>
		</div>
	);
}
