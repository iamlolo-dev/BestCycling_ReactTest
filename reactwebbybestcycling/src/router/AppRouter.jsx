import { Route, Routes } from "react-router-dom"

import { CyclingRoutes } from "../BestCycling/routes/CyclingRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute, PublicRouter } from "./";

export const AppRouter = () => {

    return (
        <>
            <Routes>

                //route private
                <Route path='/login' element={
                    <PublicRouter>
                        <Routes>
                            <Route path='/*' element={<LoginPage />} />
                        </Routes>
                    </PublicRouter>
                } />

                //route public
                <Route path='/*' element={
                    <PrivateRoute>
                        <CyclingRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    );
};