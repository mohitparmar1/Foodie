import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
const MainNav = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);

    return (
        <span className="flex space-x-2 items-center">
            {
                isAuthenticated ? (
                    <UsernameMenu />
                ) : (
                    <Button
                        className="font-bold hover:text-orange-500 hover:bg-white  md:block lg:block xl:block"
                        variant="ghost"
                        onClick={
                            async () => await loginWithRedirect()
                        }
                    >
                        Login
                    </Button>
                )
            }
        </span >
    );
}

export default MainNav;