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
import toast from "react-hot-toast"
import LetterSwapPingPong from "../fancy/letter-swap-pingpong-anim"
import ComesInGoesOutUnderline from "../fancy/underline-comes-in-goes-out"
import { ModeToggle } from "../mode-toggle"
import { Button } from "../ui/button"


export default function Header() {
  return (
    <header className=" w-full z-30 p-3 flex justify-between items-center h-[10vh]">
      <div >
        <LetterSwapPingPong
                 className="text-3xl font-bold"
                  label="Welcome to my portfolio"
                 staggerFrom={"center"}
                 reverse={false}
               />
      </div>
      <>
        <div className="hidden  md:block space-x-3">

          <ModeToggle/>

 <Button className="text-xl text-white" onClick={()=>{
   toast.success("Done")
 }}>Download resume pdf</Button>


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
