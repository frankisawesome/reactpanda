import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from './nav'

export function Home() {
    return (
        <div>
        <Nav />
        <p>
          Choose the link that applies to you
        </p>
        <p>
          <Link variant="primary" to="/employee">Employee</Link>
        </p>
        <p>
          <Link variant="primary" to="/employer">Employer</Link>
        </p>
      </div>
    )
}