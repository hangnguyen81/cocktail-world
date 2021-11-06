import React, {useState, useContext} from 'react';
import { mainMenu } from './data';

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
                location}}>
            {children}
        </CocktailContext.Provider>
    )
}

//custom hook

export const useGlobalContext = () => {
    return useContext(CocktailContext);
}

export {CocktailContext, CocktailContextProvider};