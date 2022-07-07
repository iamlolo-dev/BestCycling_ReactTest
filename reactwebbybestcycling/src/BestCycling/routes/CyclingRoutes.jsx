import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'

import { Navbar } from '../../ui/components/Navbar'
import { CyclingPage, TrainingPage, SearchTrainingPage } from '../pages'

export const CyclingRoutes = () => {
    return (
        <>
            <Navbar />
            
            <Container maxWidth='xl' style={{display: 'grid', justifyContent:'center'}}>
                <Routes>
                    <Route path='home' element={<CyclingPage />} />
                    <Route path='trainingclass/:id' element={<TrainingPage />} />
                    <Route path='searchtrainingclass' element={<SearchTrainingPage />} />

                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </Container>
        </>
    )
}