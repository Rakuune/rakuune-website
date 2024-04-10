import React, { useState } from 'react'
import './ContactForm.css';
import '../index.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h2>Contact Form</h2>
      <div className="inputField">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="inputField"
        />
      </div>
      <div className="inputField">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="inputField"
        />
      </div>
      <div className="inputField">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="inputField"
        />
      </div>
      <div className="inputField">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="textAreaField"
        />
      </div>
      <button type="submit" className="Button">
        SUBMIT
      </button>
    </form>
  )
}

export default ContactForm
