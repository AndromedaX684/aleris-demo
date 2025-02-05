import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router"; // Adjust if using Next.js

export default function NavCards() {
	return (
		<div className="flex flex-wrap gap-6 justify-center">
			<Link to="/sjekklister">
				<Card className="w-64 shadow-lg transition">
					<CardHeader>
						<CardTitle>Sjekklister</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Administrer og fullfør sjekklister for rutinemessige oppgaver.
						</p>
						<Button className="mt-4 w-full">Gå til Sjekklister</Button>
					</CardContent>
				</Card>
			</Link>

			<Link to="/vaksiner">
				<Card className="w-64 shadow-lg transition">
					<CardHeader>
						<CardTitle>Vaksiner</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Oppslagsverk for vaksiner og hjelp via Kunstig Intelligense.</p>
						<Button className="mt-4 w-full">Gå til Vaksiner</Button>
					</CardContent>
				</Card>
			</Link>
		</div>
	);
}
