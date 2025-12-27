import React from 'react'

function Header() {
  return (
    <div className='p-4 shadow-sm flex items-center  w-full p-4 justify-between'>
        <img src='/logo.svg'/>
        <div>
            <button className='box'>sign in</button>
        </div>
    </div>
  )
}

export default Header;
