"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignOut from "../forms/SignOut";

const Header = ({ session }: { session: any }) => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`bg-transparent  w-full transition-all duration-200 `}>
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link href="/">
					<Image src="/icons/frame.svg" alt="logo" width={140} height={40} />
				</Link>
				<nav className="hidden gap-6 md:flex justify-center  items-center">
					<Link
						href="/"
						className={cn(
							"text-base cursor-pointer capitalize",
							pathname === "/" ? "text-[#E7C9A5]" : "text-slate-400 "
						)}>
						Home
					</Link>
					<Link
						href="/library"
						className={cn(
							"text-base cursor-pointer capitalize",
							pathname === "/library" ? "text-[#E7C9A5]" : "text-slate-400 "
						)}>
						Library
					</Link>
					{!session ? (
						<>
							<Link
								href="/sign-in"
								className={cn(
									"text-base cursor-pointer capitalize",
									pathname === "/sign-in" ? "text-[#E7C9A5]" : "text-slate-400 "
								)}>
								Sign In
							</Link>
						</>
					) : (
						<>
							<div className="relative">
								<Avatar>
									{/* <AvatarImage src={session.user.image} alt="Kelly King" /> */}
									<AvatarFallback className="bg-[#232839] text-white">{getInitials(session.user.name)}</AvatarFallback>
								</Avatar>
								<span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-background bg-emerald-500">
									<span className="sr-only">Online</span>
								</span>
							</div>

							<SignOut />
						</>
					)}
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-6 w-6 text-white" />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<nav className="flex flex-col gap-4  items-center justify-center">
							<Link href="/" className="text-sm font-medium">
								Home
							</Link>
							<Link href="/library" className="text-sm font-medium">
								Library
							</Link>
							<Link href="sign-in" className="text-sm font-medium">
								Sign In
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Header;
