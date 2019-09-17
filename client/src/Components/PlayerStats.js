import React from 'react';
import '../Components/card.scss';

export default function PlayerStats({name , country, searches}) {
    return(
        <div className='playerCard'>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </div>
    )
}
