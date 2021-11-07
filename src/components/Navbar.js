import {FaCocktail, FaBars} from 'react-icons/fa';
import {mainMenu, socials} from '../data';
import { useGlobalContext } from '../cocktailContext';
import {Link} from 'react-router-dom';


export default function Navbar(){
    const {openSidebar, openSubmenu} = useGlobalContext();

    const displaySubmenu = (e) =>{
        const submenuItem = e.target.textContent;
        const location = e.target.getBoundingClientRect();
        const x = (location.left + location.right)/2;
        const y = location.bottom ;
        openSubmenu(submenuItem,{x,y});
    }

    return(
        <nav className="nav">  
            <div className='nav-center'>     
                <div className='nav-header'>    
                    <Link to="/">
                        <FaCocktail className='nav-logo-icon'/>
                        <span className='nav-logo-text'>Cocktail world</span>
                    </Link>               
                    <button className='btn-toggle' onClick={openSidebar} ><FaBars/> </button>
                </div>  
                <div className='nav-links'>              
                    <ul className='links'>
                        {mainMenu.map((item,i) =>{
                            return <li 
                                key={i} 
                                onMouseOver={displaySubmenu}
                                >{item.page}</li>
                        })}
                    </ul>
                    <ul className='links'>
                        {socials.map((item,i) =><li key={i}><a href={item.url} className='nav-socials-icon'>{item.icon}</a></li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


