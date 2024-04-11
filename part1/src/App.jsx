import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import CustomNotification from './components/Notification'
import Persons from './components/Persons'
import handler from './services/handlers'
import nameService from './services/Names'
import TopNav from './services/TransparentNav'
import './index.css'

const App = () => {
    return (
        <div className="content">
            <div>
                <TopNav/>
            </div>
            <div className="header">
                <h1>Valtteri Rantala</h1>
                <p>Who? Some random Computer science student I guess</p>
            </div>
            <div className="profile">
                <div className="profile-content" id="about">
                    <h2>About me</h2>
                    <p>
                        As a student at Oulu University, I've always believed in going beyond the traditional confines of classroom learning.
                        That's why I've taken it upon myself to dive deep into the world of full-stack programming,
                        learning independently and nurturing a growing passion for technology.
                        My interest isn't just academic; it's a reflection of my genuine enthusiasm for understanding
                        and mastering the digital tools that shape our world.
                    </p>

                    <p>
                        People often describe me as down-to-earth, and I take that as a compliment.
                        It's this approachable nature that I believe helps me connect with both new concepts and people easily.
                        I pride myself on my adaptability and my ability to pick up new skills quickly.
                        Whether it's a complex programming language or a new project management tool,
                        I find excitement in the challenge of learning and applying knowledge swiftly and efficiently.
                    </p>

                    <p>
                        My journey into coding and software development extends beyond just preparing for a future career;
                        it's about cultivating a lifelong passion. I'm committed to staying ahead of the curve,
                        eagerly embracing new technologies and methodologies that emerge in the ever-evolving landscape of full-stack development.
                        To me, every piece of code is not just a task but a step towards building a more technologically adept future for myself and those around me.
                    </p>

                    <p>
                        In summary, my academic journey at Oulu University,
                        combined with my self-taught programming endeavors,
                        reflect not just my ambition but also my dedication
                        to personal growth and professional excellence in the realm of technology.
                    </p>
                </div>
                <div className="profile-image">
                    <img src="/profpic.png" alt="Valtteri Rantala"></img>
                </div>
            </div>
            <div className="skills">
                <div className="skill-container">
                    <h3>Skills</h3>
                    <p>Some of the SW skills I've picked up in my studies or in my own time</p>
                    <ul className="skills ul">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>python</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="contactContainer" id="contact">
                    <ul className="container">
                        <li className="item">
                            <a href="https://www.instagram.com/valzhah/">
                                <i className="fa-brands fa-instagram icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.linkedin.com/in/valtteri-rantala-779027263/">
                                <i className="fa-brands fa-linkedin icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <i className="fa-brands fa-youtube icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://github.com/Rakuune">
                                <i className="fa-brands fa-github icon"></i>
                            </a>
                        </li>
                    </ul>
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
            <div className="footer">
                Website by me
            </div>
        </div>
    )
}

export default App