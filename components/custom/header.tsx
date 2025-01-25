import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import LetterSwapPingPong from "../fancy/letter-swap-pingpong-anim"
import ComesInGoesOutUnderline from "../fancy/underline-comes-in-goes-out"
import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"


export default function Header() {
  return (
    <header className="fixed w-full z-30 p-3 flex justify-between items-center h-[10vh]">
      <div >
        <LetterSwapPingPong
                 className="text-3xl font-bold"
                 label="Hi I'm Augustine"
                 staggerFrom={"center"}
                 reverse={false}
               />
      </div>
      <>
        <div className="hidden  md:block space-x-3">

          <ModeToggle/>

 <Button className="text-xl text-white">Download resume pdf</Button>


 <Button variant="link">
 <Link prefetch={false} href="#projects" >
   <ComesInGoesOutUnderline underlineHeightRatio={0.2} underlinePaddingRatio={-0.3} className="text-xl font-bold" label="Projects" direction="right" />
 </Link>
 </Button>

        </div>
      <div className="md:hidden">
        <DropdownMenu>
        <DropdownMenuTrigger >
          <Menu/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Contact</DropdownMenuItem>
          <DropdownMenuItem>Projects</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      </>


    </header>
  )
}
