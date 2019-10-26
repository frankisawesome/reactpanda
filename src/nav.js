import React from 'react'
import './nav.css'
import FigureImage from 'react-bootstrap/FigureImage'
import panda from './smallpanda.jpg';
import { Link } from 'react-router-dom'

export function Nav ()
{
    return(
        <nav>
            <Link to="/"><FigureImage src={panda} height={140}/></Link>
            <h1>Survey Panda</h1>
        </nav>
    )
}

