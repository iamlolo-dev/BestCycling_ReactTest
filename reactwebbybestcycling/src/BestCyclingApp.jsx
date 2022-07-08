import React from 'react'

import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context';
import { ClassProvider } from './BestCycling/context/ClassProvider';

export const BestCyclingApp = () => {

    return (
        <AuthProvider>
            <ClassProvider>
                <AppRouter />
            </ClassProvider>
        </AuthProvider>
    );
};