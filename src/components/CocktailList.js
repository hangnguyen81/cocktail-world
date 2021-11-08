import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../cocktailContext';

const CocktailList = () => {
    const {loading, cocktails} = useGlobalContext();
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
        {cocktails.map((item,i) => <Cocktail key={i} {...item}/>)}
      </div>


    </div>
  )
}

export default CocktailList;