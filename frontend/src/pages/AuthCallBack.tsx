import { useMyUserRequest } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallBack = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useMyUserRequest();

    const hasCreated = useRef(false);

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreated.current) { //setting hasCreated to true to procede to the user creation only once
            createUser({
                auth0Id: user.sub,
                email: user.email
            })
            hasCreated.current = true;
            navigate("/")
        }
    }, [createUser, navigate, user])
    return <h1>Loading</h1>
}

export default AuthCallBack;