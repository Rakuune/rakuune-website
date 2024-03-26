"use strict";

var _mongoose = require("mongoose");
var _react = require("react");
const handler = () => {
  const [persons, setPersons] = (0, _react.useState)([]);
  const [newName, setNewName] = (0, _react.useState)('');
  const [newNumber, setNewNumber] = (0, _react.useState)('');
  const [newEmail, setNewEmail] = (0, _react.useState)('');
  const [message, setMessage] = (0, _react.useState)(null);
  const [notificatin, setNotification] = (0, _react.useState)(null);
  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const addName = event => {
    event.preventDefault();
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      alert(`welcome back ${newName} seems like your info is already here`);
    } else {
      const nameObject = {
        name: newName,
        email: newEmail,
        phone: newNumber,
        message: message
      };
      numberService.create(nameObject).then(response => {
        if (response) {
          setPersons(persons.concat(response));
          setNewName('');
          setNewNumber('');
          setNewEmail('');
          setMessage('');
          setNotification(`Added ${response.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      }).catch(error => {
        console.error('Error adding person:', error);
        alert('An error occurred while sending info.');
      });
    }
  };
};