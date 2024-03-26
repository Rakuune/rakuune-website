import { set } from 'mongoose'
import { useState, useEffect } from 'react'

const handler = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [message, setMessage] = useState(null)
    const [notification, setNotification] = useState(null)

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault();
        const nameExists = persons.some(person =>
            person.name.toLowerCase() === newName.toLowerCase()
        )

        if (nameExists) {
            alert(`welcome back ${newName} seems like your info is already here`)
        } else {
            const nameObject = {
                name: newName,
                email: newEmail,
                phone: newNumber,
                message: message
            }

            numberService.create(nameObject)
                .then(response => {
                    if (response) {
                        setPersons(persons.concat(response))
                        setNewName('')
                        setNewNumber('')
                        setNewEmail('')
                        setMessage('')
                        setNotification(`Added ${response.name}`);
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    }
                })
                .catch(error => {
                    console.error('Error adding person:', error)
                    alert('An error occurred while sending info.')
                })
        }
    }
}

export default handler