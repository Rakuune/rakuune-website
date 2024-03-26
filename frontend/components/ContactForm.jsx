import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0000FF', color: 'white', border: 'none', cursor: 'pointer' }}>
        SUBMIT
      </button>
    </form>
  )
}

export default ContactForm
