import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import CustomNotification from './components/Notification'
import Persons from './components/Persons'
import handler from './services/handlers'
import nameService from './services/Names'
import './index.css'

const App = () => {
/*
    useEffect(() => {
        nameService
            .getAll()
            .then(initialNames => {
                handler.setPersons(initialNames)
            })
    }, [])
*/
    return (
        <div className="content">
            <div className="header">
                <h1>Testi nyt alkuun</h1>
            </div>
            <div className="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
            <CustomNotification notification={handler.notification} />
            <div>
                <div className="header">
                <h2>Contact form</h2>
                </div>
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
        </div>
    )
}

export default App