import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import "../global.css"

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500 lg:hidden " />
            </SheetTrigger>
            <SheetContent className="space-x-3">
                <SheetTitle>
                    <span>Welcome to Foodie</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">
                        Login
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;