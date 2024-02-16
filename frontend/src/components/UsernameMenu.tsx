
import { CircleUserIcon } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";

const UsernameMenu = () => {
    const { user } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="flex items-center px-3 font-bold hover:text-orange-600">
                <CircleUserIcon
                    className="text-orange-500"
                />
                <span
                className="text-sm"
                >{user?.email}</span>

            </DropdownMenuTrigger>
        </DropdownMenu>
    );
}

export default UsernameMenu;