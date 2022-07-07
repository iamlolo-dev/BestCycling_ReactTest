import { Navigate, Route, Routes } from "react-router-dom"

import { CyclingRoutes } from "../BestCycling/routes/CyclingRoutes";

export const AppRouter = () => {
    
    //Aqui podriamos implementar rutas privadas y publicas según si el usuario esta logueado o no.
    return (
        <>
            <Routes>
                <Route path="/*" element={<CyclingRoutes />} />
            </Routes>
        </>
    );
};