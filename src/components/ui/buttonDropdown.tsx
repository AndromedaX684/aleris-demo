import { ChevronDown } from "lucide-react";

export function ButtonDropdown({ children }: { children: React.ReactNode }) {
	return (
		<button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
			{children}
			<ChevronDown className="h-4 w-4" />
		</button>
	);
}
