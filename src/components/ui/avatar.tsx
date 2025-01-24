import React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional class merging

interface AvatarProps {
	src?: string; // URL of the image
	alt?: string; // Alternative text
	size?: "sm" | "md" | "lg"; // Size of the avatar
	className?: string; // Additional classes
	fallbackText?: string; // Fallback text if the image is missing
}

const Avatar: React.FC<AvatarProps> = ({
	src,
	alt = "Avatar",
	size = "md",
	className,
	fallbackText = "A",
}) => {
	const sizes = {
		sm: "w-8 h-8 text-sm",
		md: "w-12 h-12 text-base",
		lg: "w-16 h-16 text-lg",
	};

	return (
		<div
			className={cn(
				"relative flex items-center justify-center rounded-full overflow-hidden bg-gray-200 text-gray-700",
				sizes[size],
				className
			)}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					className="object-cover w-full h-full"
					onError={(e) => {
						const target = e.target as HTMLImageElement;
						target.style.display = "none"; // Hide broken image
					}}
				/>
			) : (
				<span className="font-medium">{fallbackText}</span>
			)}
		</div>
	);
};

export default Avatar;
