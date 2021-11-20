import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../cocktailContext';
import { useEffect, useState } from 'react';

const CocktailList = () => {
    const {loading, cocktails} = useGlobalContext();
    const [page, setPage]= useState(0);
    const [cocktailsInPage, setCocktailsInPage] = useState([])

  useEffect(()=>{
       if (loading)
        return setCocktailsInPage(cocktails[page]) 
    },[page, cocktails, loading])
  
  const handlePage = (index) =>{
    setPage(index);
  }

    if (loading)
      return <Loading/>

    if (cocktails.length < 1)
      return(
         <div className='section-title'>
           <h4>No cocktail matches your search!</h4>
         </div>
    )



    console.log(page);
    console.log(cocktailsInPage);


  return (
    <div className='section'>
      <h2 className='section-title'> List of cocktails </h2>
      <div className='cocktails-center'>
        {cocktailsInPage.map((item,i) => <Cocktail key={i} {...item}/>)}
      </div>
      {!loading && <div className='btn-container'>
        <button className='btn-prev'>Prev </button>
        {cocktails.map((item, index)=>{
          return <button 
                    key={index} 
                    className={`btn-page ${index === page?'btn-active':''}`} 
                    onClick={()=>handlePage(index)}
                  >
                    {index+1}          
                  </button>
        })}
        <button className='btn-next'>Next</button>
        </div>}

    </div>
  )
}

export default CocktailList;