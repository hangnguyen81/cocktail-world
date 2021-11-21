import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../cocktailContext';
import { useEffect, useState } from 'react';

const CocktailList = () => {
    const {loading, cocktails} = useGlobalContext();
    const [page, setPage]= useState(0);
    const [cocktailsInPage, setCocktailsInPage] = useState([])

  useEffect(()=>{
    setCocktailsInPage(cocktails[page]);
  },[cocktails, page])

  const handlePage = (index) =>{
    setPage(index);
  }

  const nextPage = () =>{
    let nextPage = page + 1;
    if (nextPage > cocktails.length - 1)
      nextPage = 0;
    return setPage(nextPage);
  }

  const prevPage = () =>{
    let prevPage = page - 1;
    if (prevPage < 0 )
      prevPage = cocktails.length-1;
    return setPage(prevPage);
  }

  if (loading)
    return <Loading/>

  if (cocktails.length < 1)
    return(
        <div className='section-title'>
          <h4>No cocktail matches your search!</h4>
        </div>
  )

  return (
    <div className='section'>
      <h2 className='section-title'> List of cocktails </h2>
      <div className='cocktails-center'>
        {cocktailsInPage.map((item,i) => <Cocktail key={i} {...item}/>)}
      </div>
      {!loading && <div className='btn-container'>
        <button className='btn-prev' onClick={prevPage}>Prev </button>
        {cocktails.map((item, index)=>{
          return <button 
                    key={index} 
                    className={`btn-page ${index === page?'btn-active':''}`} 
                    onClick={()=>handlePage(index)}
                  >
                    {index+1}          
                  </button>
        })}
        <button className='btn-next' onClick={nextPage}>Next</button>
        </div>}

    </div>
  )
}

export default CocktailList;