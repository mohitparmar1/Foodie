
import { CircleUserIcon, LogOut } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu >
            <DropdownMenuTrigger
                className="hidden items-center px-3 font-bold md:flex lg:flex xl:hidden hover:text-orange-600">
                <CircleUserIcon
                    className="text-orange-500"
                />
                <span
                    className="text-sm"
                >{user?.email}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="bg-white border border-gray-200 rounded-md p-2 space-y-3 w-32 h-32 flex flex-col text-center z-10">
                <DropdownMenuItem>
                    <Link
                        className="font-bold hover:text-orange-500 hover:bg-white"
                        to="/user-profile">User Profile </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => {
                            logout();
                        }}
                        className="font-bold flex w-full bg-orange-500 "
                    >
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UsernameMenu;