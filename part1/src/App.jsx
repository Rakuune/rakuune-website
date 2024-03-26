import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import CustomNotification from './components/Notification'
import Persons from './components/Persons'
import handler from './services/handlers'
import nameService from './services/Names'
import './index.css'

const App = () => {

    useEffect(() => {
        nameService
            .getAll()
            .then(initialNames => {
                handle.setPersons(initialNames)
            })
    }, [])

    return(
        <div>
            <h1>Testi nyt alkuun</h1>
            <Notification notification={handler.notification}/>

            <h2>Contact form</h2>
            <ContactForm
                newName={handler.newName}
                newNumber={handler.newNumber}
                newEmail={handler.newEmail}
                message={handler.message}
                handleNameChange={handler.handleNameChange}
                handleNumberChange={handler.handleNumberChange}
                addName={handler.addName}
                />
        </div>
    )
}

export default App