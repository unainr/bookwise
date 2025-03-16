import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import BookCoverSvg from "../bookCoverSvg";
type BookCoverVarients = "extraSmall" | "small" | "medium" | "regular" | "wide";

const varientStyples: Record<BookCoverVarients, string> = {
	extraSmall: "w-[28.95px] h-10",
	small: "w-[55px] h-[76px]",
	medium: "w-[144px] h-[199px]",
	regular: "xs:w-[174px] w-[114px] xs:h-[239px] h-[169px]",
	wide: "xs:w-[296px] w-[256px] xs:h-[404px] h-[354px]",
};
interface BookCoverProps {
	className?: string;
	varient?: BookCoverVarients;
	bookColor: string;
	bookImage: string;
}
const BookCoverAdmin = ({
	className,
	varient = "regular",
	bookColor = "#012B48",
	bookImage,
}: BookCoverProps) => {
	return (
		<div
			className={cn(
				"relative transition-all duration-300 ",
				varientStyples[varient],
				className
			)}>
			<BookCoverSvg coverColor={bookColor} />
			<div
				className="absolute z-10"
				style={{ left: "12%", width: "87.5%", height: "88%" }}>
				<Image
					src={bookImage}
					alt="imagecover"
					fill
					className="rounded-sm object-fill"
				/>
			</div>
		</div>
	);
};

export default BookCoverAdmin;
