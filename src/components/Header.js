import React from 'react'

function Header() {

    const firstName = 'udaya'
    const lastName = 'bhaskar'

    return (
        <div>
        <header className='navbar'>This is the header</header>
        <h2>Hello {firstName + " " + lastName} </h2>
        </div>
    )
}

export default Header 
