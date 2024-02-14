import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<span>THis is the home page</span>} />
        </Routes>
    )
}


export default AppRoutes
