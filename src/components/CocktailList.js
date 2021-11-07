import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../cocktailContext';

const CocktailList = () => {
    const {loading, cocktails} = useGlobalContext();
    if (loading)
        return <Loading/>
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList;