import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getgifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './gifGridItem';


export const GifGrid = ({ category }) => {
  
    const { images, isLoading } = useFetchGifs( category )



    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading  &&  <h2>cargando...</h2>
            }

            <div className='card-grid'>
                {
                    images.map( (image) => (
                        <GifItem 
                            key={ image.id }
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}