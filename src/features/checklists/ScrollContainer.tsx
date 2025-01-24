export function ScrollContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex-1 overflow-auto">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{children}
			</div>
		</div>
	);
}
