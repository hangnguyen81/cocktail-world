import {useGlobalContext} from '../cocktailContext';
import {useRef, useEffect} from 'react';
function Search(){
    const {closeSubmenu, setSearchTerm} = useGlobalContext()
    const searchValue = useRef('');

    useEffect(()=>{
        searchValue.current.focus();
    },[])
    return(
        <div className='search' onMouseOver={closeSubmenu}>
            <div className='search-container'>
                <h3>Searh your favourite cocktail</h3>
                <input 
                    type='text'
                    ref={searchValue}
                    onChange={() => setSearchTerm(searchValue.current.value)}
                    placeholder='e.g Mimosa'
                />
            </div>
        </div>
    )
}

export default Search;