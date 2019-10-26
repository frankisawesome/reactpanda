import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./employee.css"
import { Button } from 'react-bootstrap';
import { Nav} from './nav'

export function Employee() {
    const [music, setMusic] = useState(3)
    const [stress, setStress] = useState(3)
    const [cleanliness, setCleanliness] = useState(3)
    const [message, setMessage] = useState('')

    function handleMusic(e)
    {
        setMusic(e.target.value)
    }

    function handleStress(e)
    {
        setStress(e.target.value)
    }

    function handleClean(e)
    {
        setCleanliness(e.target.value)
    }

    function handleSubmit()
    {
        const body = JSON.stringify({
            userId: 1,
            music: music,
            stress: stress,
            cleanliness: cleanliness
        })

        fetch('http://localhost:3001/surveys/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
        .then((res) => {
            if (res.status === 200){
                setMessage('Successfully submited!!')
            }
            else {
                setMessage(res.status)
            }
        })
        .catch((err) => {
            setMessage(err.toString())
        })
    }

    return (
        <div className="employee">
            <Nav />
            <Form>
                <Form.Label class="qs">{questions[0]}</Form.Label>
                <input value={music} onChange={handleMusic}/> (1-5)<br />
                <Form.Label class="qs">{questions[1]}</Form.Label>
                <input value={stress} onChnage={handleStress}/> (1-5)<br />
                <Form.Label class="qs">{questions[2]}</Form.Label>
                <input value={cleanliness} onChange={handleClean} /> (1-5)<br />
            </Form>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            <p>{message}</p>
        </div>
    )
}


const options = [
    "1 - Very bad",
    "2 - Kinda bad",
    "3 - Alright",
    "4 - Pretty Good",
    "5 - Excellent"
]

const questions = [
    "How did you like the music today?",
    "Was today a bit stressful?",
    "Do you think your work environment was clean?"
]