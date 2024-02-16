import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return (
        <>
            <Link
                className="flex justify-center bg-white items-center font-bold text-lg hover:text-orange-500 p-2"
                to="/user-profile">
                User Profile
            </Link>
            <Button
                onClick={async () => await logout()}
                className="flex-1 font-bold bg-orange-500">
                Logout
            </Button>
        </>
    );
}

export default MobileNavLinks;