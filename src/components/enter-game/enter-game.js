import React, { useState } from 'react';
import './enter-game.css';

const EnterGame = (props) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={ isActive ? 'enter-game enter-game--form' : 'enter-game enter-game--button'} 
             >
            <div className='enter-game__open' onClick={ () => { setIsActive(true) } }>
                <i className='fa fa-plus'></i>
            </div>
            <div className='enter-game__game-entry-content'>
                { isActive && (<style>
                    {`body {
                        overflow: hidden;
                    }`}
                </style>)}
                <iframe className='enter-game__game-entry'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfv828TjuT2R2IdxJxNCCPrqcMqVgJvJZXS9PBbDQO2KU1sXg/viewform?embedded=true"
                        > Loading... </iframe>
                <button className='enter-game__close' onClick={ () => { setIsActive(false); } }> close </button>
            </div>
        </div>
    );
};


export { EnterGame }