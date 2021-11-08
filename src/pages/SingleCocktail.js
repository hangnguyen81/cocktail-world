import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
function SingleCocktail(){    
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(()=>{
        setLoading(true);
        async function fetchCocktail(){
            try {
                const res = await fetch(`${url}${id}`);
                const data = await res.json();
                if (data.drinks){
                    const { 
                        strDrink:name, 
                        strCategory: category,
                        strAlcoholic: info, 
                        strGlass: glass, 
                        strDrinkThumb: imgUrl,
                        strInstructions: instruction, 
                        strIngredient1, 
                        strIngredient2, 
                        strIngredient3, 
                        strIngredient4, 
                        strIngredient5 } = data.drinks[0];
                    const ingredients = [
                        strIngredient1, 
                        strIngredient2, 
                        strIngredient3, 
                        strIngredient4, 
                        strIngredient5 
                    ]

                    const newCocktail = {
                        name,
                        category,
                        info, 
                        glass, 
                        imgUrl,
                        instruction,
                        ingredients
                    }
                    setCocktail(newCocktail);                    
                }
                else
                    setCocktail(null)
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchCocktail();
    },[id])

    if (loading)
        return <Loading/>

    if (!cocktail)
        return <h3 className='section-title'>No cocktail to display!</h3>

    const {name, category, info, glass, imgUrl, instruction, ingredients} = cocktail;    
    return (
        <div className='section cocktail-section'>
            <Link to='/'className='btn btn-primary'> back home</Link>
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
                <img src={imgUrl} alt={name}/>
                <div className='drink-info'>
                    <p><span className='drink-data'>Name:</span>{name}</p>
                    <p><span className='drink-data'>category:</span>{category}</p>
                    <p><span className='drink-data'>info:</span>{info}</p>
                    <p><span className='drink-data'>glass:</span>{glass}</p>
                    <p><span className='drink-data'>instruction:</span>{instruction}</p>
                    <p><span className='drink-data'>ingredients:</span>
                    {ingredients.map((ingredient,i) =>{
                        return ingredient?<span key={i}>{ingredient} </span>:null
                    })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleCocktail;