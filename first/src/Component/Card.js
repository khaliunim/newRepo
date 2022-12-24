import React from 'react';
import './card.css';

export const Card = ({name, img, year, time, id}) => {

    return (
        <div className='cardAllContainer'>
            <a href={`https://fmoviesto.site/${id}`}><img src={img}></img></a>
            <div className='cardContainer'>
                <div className='name'>{name}</div>
                <div className='info'>
                    <div className='date'>
                        <div>{year}</div>
                        <div className='dot'></div>
                        <div>{time} min</div>
                    </div>
                    <div className='float-right'>Movie</div>
                </div>
            </div>
        </div>

    )
}