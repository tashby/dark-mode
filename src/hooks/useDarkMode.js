import React, {useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, value) => {
    const [toggleDark, setChange] = useLocalStorage(key, value);
    
    const toggleMode = e => {
        e.preventDefault();
        setChange(!toggleDark);
      };

    useEffect(()=> {
        if(toggleDark != true) {
            document.querySelector("body").classList.remove('dark-mode')
        } else {
            document.querySelector("body").classList.toggle('dark-mode')
        }
    }, 
    [toggleDark])


    return [toggleDark, toggleMode]
}