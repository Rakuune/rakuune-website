import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';

const TransparentNav = () => {
    const [scrollAlpha, setScrollAlpha] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let alpha = Math.min(scrollPosition / 500, 1);
            setScrollAlpha(alpha);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navStyle = {
        backgroundColor: `rgba(51, 51, 51, ${scrollAlpha})`
    }
    return (
        <div className="topnav" style={navStyle}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
            
        </div>
    );
};

export default TransparentNav;