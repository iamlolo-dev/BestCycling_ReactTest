import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'

import { Navbar } from '../../ui/components/Navbar'
import { ClassProvider } from '../context/ClassProvider'
import { CyclingPage, TrainingPage, SearchTrainingPage, SubscriptionPage } from '../pages'

export const CyclingRoutes = () => {
    return (
        <ClassProvider>
            <Navbar />
            
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='home' element={<CyclingPage />} />
                    <Route path='trainingclass/:id' element={<TrainingPage />} />
                    <Route path='searchtrainingclass' element={<SearchTrainingPage />} />
                    <Route path='subscription' element={<SubscriptionPage />} />

                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </Container>
        </ClassProvider>
    )
}