import React, {useState} from 'react';
import './App.css';



function Room() {
    const [io, setIo] = useState(0)
    
    const switchOff = () => {
        setIo(1)
        setTimeout( () => {
            setIo(0)
        }, 500)
    }
       
    return (
        <div className={io ? 'room lit' : 'room dark'}>
            <div className={io ? 'kuckuck' : 'null'}></div>
            <button onClick={ () => setIo(io ? 0 : switchOff) }>{io ? 'TOO BRIGHT!' : ''/* 'too dark!' */}</button>
        </div>
    )
}

function App() {
    return (
            <Room />
    )
}

export default App
/* ReactDOM.render(
    <App />,
    document.querySelector('#root')
) */