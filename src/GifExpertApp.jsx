import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/gifGrid";


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([])
    
    const onAddCategory = ( NewCategory ) => {

        if (  categories.includes(NewCategory)) return; 
 
        setCategories([ NewCategory, ...categories ])

    };

    return (
        <>

            <h1>GifExpertApp</h1>
        
            <AddCategory 
                onNewCategory={ onAddCategory }

            />


            { 
                categories.map( (category) => 
                (
                    <GifGrid 
                    key={ category }
                    category={ category } 
                    />
                ))
                
            }

        </>
    )
}