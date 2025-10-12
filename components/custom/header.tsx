"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import LetterSwapPingPong from "../fancy/letter-swap-pingpong-anim";
import ComesInGoesOutUnderline from "../fancy/underline-comes-in-goes-out";

export default function Header() {
  const handleDownloadResume = () => {
    toast.success("Downloading resume...");
    // You can later update this to actually download the PDF file, e.g.:
    // window.open("/resume.pdf", "_blank");
  };

  return (
    <header className="w-full z-30 px-4 sm:px-8 py-6 flex justify-between items-center  backdrop-blur-md border-b border-border/40 sticky top-0">
      {/* Left: Brand or Title */}
      <div className="flex items-center">
        <LetterSwapPingPong
          className="text-2xl sm:text-3xl font-bold"
          label="Welcome to my portfolio"
          staggerFrom="center"
          reverse={false}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <ModeToggle />

        <Button className="text-base text-white" onClick={handleDownloadResume}>
          Download Resume
        </Button>

        <Button variant="link" asChild>
          <Link prefetch={false} href="#projects">
            <ComesInGoesOutUnderline
              underlineHeightRatio={0.2}
              underlinePaddingRatio={-0.3}
              className="text-lg font-semibold"
              label="Projects"
              direction="right"
            />
          </Link>
        </Button>

        <Button variant="link" asChild>
          <Link prefetch={false} href="#contact">
            <ComesInGoesOutUnderline
              underlineHeightRatio={0.2}
              underlinePaddingRatio={-0.3}
              className="text-lg font-semibold"
              label="Contact"
              direction="right"
            />
          </Link>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href="#projects" prefetch={false}>
                Projects
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="#contact" prefetch={false}>
                Contact
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleDownloadResume}>
              Download Resume
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
