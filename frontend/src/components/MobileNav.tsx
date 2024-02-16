import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import "../global.css"
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500 lg:hidden" />
            </SheetTrigger>
            <SheetContent className="space-x-3">
                <SheetTitle>
                    {
                        isAuthenticated ? (
                            <span>Welcome {user?.family_name} {user?.given_name} </span>
                        ) : (
                            <span>Welcome to Foodie</span>
                        )
                    }
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {
                        isAuthenticated ? (
                            <MobileNavLinks />
                        ) : (
                            <Button
                                onClick={async () => await loginWithRedirect()}
                                className="flex-1 font-bold bg-orange-500">
                                Login
                            </Button>
                        )
                    }
                </SheetDescription>
            </SheetContent>
        </Sheet >
    )
}

export default MobileNav;