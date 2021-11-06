import {useGlobalContext} from '../cocktailContext';
function Search(){
    const {closeSubmenu} = useGlobalContext()
    return(
        <div className='search' onMouseOver={closeSubmenu}>
            <div className='search-container'>
                <h3>Searh your favourite cocktail</h3>
                <input 
                    type='text'
                    placeholder='e.g Mimosa'
                />
            </div>
        </div>
    )
}

export default Search;