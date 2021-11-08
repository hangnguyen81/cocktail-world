import React, {useState, useEffect, useContext, useCallback} from 'react';
import { mainMenu } from './data';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const CocktailContext = React.createContext();

const CocktailContextProvider = ({children}) =>{
    //handling sidebar and submenu
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page:'',links:[]});
    const [location, setLocation] = useState({})

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    const openSubmenu = (text,coordinates) =>{
        const selectedPage = mainMenu.find(item => item.page ===text)
        setPage(selectedPage);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    } 
    const closeSubmenu = () => setIsSubmenuOpen(false);

    //handling search and display cocktails
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = useCallback(async () =>{
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json();
            const {drinks} = data;
            if (drinks){
                const newCocktails = drinks.map(item =>{
                    const { idDrink, 
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic, 
                            strGlass, 
                            strInstructions} = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        imgUrl:strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        intruction: strInstructions
                    }
                })
                setCocktails(newCocktails);
            }
            else{
                setCocktails([]);
            }
            setLoading(false);
        }catch (error){
            console.log(error);
            setLoading(false);
        }  
    },[searchTerm])

    useEffect(()=>{
        fetchCocktails();
    },[searchTerm, fetchCocktails]);

    return(
        <CocktailContext.Provider
            value = {{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                page,
                location,
                loading,
                searchTerm,
                cocktails,
                setSearchTerm}}>
            {children}
        </CocktailContext.Provider>
    )
}

//custom hook

export const useGlobalContext = () => {
    return useContext(CocktailContext);
}

export {CocktailContext, CocktailContextProvider};