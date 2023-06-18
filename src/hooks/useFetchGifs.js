import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getgifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

        const getImages = async() => {
            const newImages = await getGifs( category )
            setImages(newImages)
        }
     
    useEffect(() => {
            getImages();
        },[])
    
    return {
        images,
        isLoading,
    }
}
