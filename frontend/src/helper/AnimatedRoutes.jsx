import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Login from '../components/Login'
import EventAdd from '../components/EventAdd'
import InitialTransition from '../components/Loading';
import Home from '../home';
import OpenTile from '../openTile';
import EventVal from './EventVal';
import Calendarview from '../components/calendarview';

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<InitialTransition/>} />
                <Route path='/home' element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/eventadd" element={<EventAdd />} />
                <Route path='/openTile' element={<OpenTile />} />
                <Route path="/event/:val" element= {<EventVal/>}/>
                <Route path="/cal" element={<Calendarview/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes