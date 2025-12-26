import React from 'react'

function Header() {
  return (
    <div className='p-2 shadow-sm'>
        <img src='/logo.svg'/>
        <div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Header;
