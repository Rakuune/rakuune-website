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
            <div className="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
            <div className="header">
                <h1>Testi nyt alkuun</h1>
            </div>
            <div className="profile">
                <div className="profile-content">
                    <h2>About me</h2>
                    <p>
                    As a student at Oulu University, I've always believed in going beyond the traditional confines of classroom learning. 
                    That's why I've taken it upon myself to dive deep into the world of full-stack programming, 
                    learning independently and nurturing a growing passion for technology. 
                    My interest isn't just academic; it's a reflection of my genuine enthusiasm for understanding 
                    and mastering the digital tools that shape our world.
                    People often describe me as down-to-earth, and I take that as a compliment. 
                    It's this approachable nature that I believe helps me connect with both new concepts and people easily. 
                    I pride myself on my adaptability and my ability to pick up new skills quickly. 
                    Whether it's a complex programming language or a new project management tool, 
                    I find excitement in the challenge of learning and applying knowledge swiftly and efficiently.
                    My journey into coding and software development extends beyond just preparing for a future career;
                     it's about cultivating a lifelong passion. I'm committed to staying ahead of the curve,
                      eagerly embracing new technologies and methodologies that emerge in the ever-evolving landscape of full-stack development.
                    To me, every piece of code is not just a task but a step towards building a more technologically adept future for myself and those around me.
                    In summary, my academic journey at Oulu University, 
                    combined with my self-taught programming endeavors, reflect not just my ambition but also my dedication to personal growth and professional excellence in the realm of technology.
                    </p>
                </div>
            </div>
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