import React from 'react'

 // TODO: Implement dark mode toggle logic
const DarkModeToggle = ({darkMode, setDarkMode}) => {
 
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}

    </button>
  )
};

export default DarkModeToggle 
