import React, {useState} from 'react';
import DarkMode from '../hooks/DarkMode';

export default function Nav() {
    const [darkMode, setDarkMode] = DarkMode();

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
        console.log(`I clicked the button`);
    };

    return (
        <nav className="nav-bar"> 
            <div className='dark-modeToggle'>
                    <button onClick={toggleMode} 
                    className={darkMode ? 'toggle toggled' : 'toggle'} >
                        Dark Mode
                    </button>
            </div>
        </nav>
    )
}