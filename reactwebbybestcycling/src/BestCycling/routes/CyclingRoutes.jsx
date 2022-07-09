import { Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui/components/Navbar'
import { ClassProvider } from '../context/ClassProvider'
import { TrainingPlayerPage, AllClassesPage, SubscriptionPage, BestCyclingPage } from '../pages'

export const CyclingRoutes = () => {



    return (
        <ClassProvider>
            <Navbar />

            <Container maxWidth='xl'>
                <Routes>
                    <Route path='home' element={<BestCyclingPage />} />
                    <Route path='trainingclass/:id' element={<TrainingPlayerPage />} />
                    <Route path='searchtrainingclass' element={<AllClassesPage />} />
                    <Route path='subscription' element={<SubscriptionPage />} />

                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </Container>
        </ClassProvider>
    )
}