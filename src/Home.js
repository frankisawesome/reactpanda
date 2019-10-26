import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <Jumbotron>
        <h1>Survey Panda</h1>
        <p>
          Collects employee feedback anonymously and provide a clear dashboard to employers.
        </p>
        <p>
          <Link variant="primary" to="/employee">Employee</Link>
        </p>
        <p>
          <Link variant="primary" to="/employer">Employer</Link>
        </p>
      </Jumbotron>
    )
}