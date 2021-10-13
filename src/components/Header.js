import React from 'react'


const Header = ({mode, setMode}) => {

    return (
        <header style={{ color: mode ? '#000' : '#FFF', borderColor: mode ? '#333' : '#FFF'}}>
            <h1>Github Search</h1>
            <div onClick={() => {setMode(!mode)}}>{mode ? 'Dark' : 'Light'}</div>
        </header>
    )
}

export default Header
