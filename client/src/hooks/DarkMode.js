import {useEffect} from 'react';
import LocalStorage from './LocalStorage';

export default function DarkMode () {
    const [darkMode, setDarkMode] = LocalStorage('dark-mode');

    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-mode');
        }else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}