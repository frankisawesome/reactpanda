import React, { useState, useEffect } from 'react';
import Gauge from 'react-svg-gauge';
import './employer.css'
import { Nav } from './nav' 

export function Employer() {
    const [music, setMusic] = useState(50);
    const [stress, setStress] = useState(50);
    const [cleanliness, setCleanliness] = useState(50);

    useEffect(() => {
        fetch('http://localhost:3001/surveys/music', { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setMusic((res.percentage * 100).toFixed(1))
            })
            .catch((err) => {
                console.log(err.toString())
            })

        fetch('http://localhost:3001/surveys/stress', { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setStress((res.percentage * 100).toFixed(1))
            })
            .catch((err) => {
                console.log(err.toString())
            })

        fetch('http://localhost:3001/surveys/cleanliness', { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setCleanliness((res.percentage * 100).toFixed(1))
            })
            .catch((err) => {
                console.log(err.toString())
            })
    })

    return (
        <div>
            <Nav />
            <h2>Employee Insight For Today</h2>
            <Gauge value={music} label="Music" color="#359CBF"/>
        <Gauge value={stress} label="Stress" color="#FE9400"/>
        <Gauge value={cleanliness} label="Cleanliness" color="#92C731"/>
        <h2>Employee Insight For This Month</h2>
            <Gauge value={56.2} label="Music" color="#3182D6"/>
        <Gauge value={88.5} label="Stress" color="#E8A20C"/>
        <Gauge value={44.7} label="Cleanliness" color="#DEDE2C"/>
        </div>
    )
}