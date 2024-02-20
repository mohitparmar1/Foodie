import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import AuthCallBack from "./pages/AuthCallBack"
import UserProfilePage from "./pages/UserProfilePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route path="/user-profile" element={<Layout>
                <UserProfilePage />
            </Layout>} />
            <Route path="/auth-callback" element={<AuthCallBack />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}


export default AppRoutes
