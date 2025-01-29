import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";

export default function AIChatModal() {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	return (
		<div>
			{/* ✅ Button to Open Modal */}
			<Button onClick={() => setOpen(true)}>Chat with AI</Button>

			{/* ✅ AI Chat Modal */}
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-w-md w-full p-6">
					<DialogHeader>
						<DialogTitle>AI Chat Assistant</DialogTitle>
					</DialogHeader>

					{/* ✅ Chat Box */}
					<div className="flex flex-col gap-4">
						<div className="h-48 bg-gray-100 rounded-lg p-4 overflow-auto">
							<p className="text-gray-500">AI: How can I help you?</p>
						</div>

						{/* ✅ Chat Input */}
						<Input
							placeholder="Ask about vaccines..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>

					{/* ✅ Buttons */}
					<DialogFooter className="flex justify-between mt-4">
						<Button variant="outline" onClick={() => setOpen(false)}>
							Close
						</Button>
						<Button
							onClick={() => {
								console.log("User Message:", message);
								setMessage("");
							}}
						>
							Send
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
