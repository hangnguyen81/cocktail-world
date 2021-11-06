import {FaTimes} from 'react-icons/fa';
import { mainMenu } from '../data';
import {useGlobalContext} from '../cocktailContext';
import {Link} from 'react-router-dom';

function Sidebar(){
    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    return(
        <div className={`${isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
            <div className='sidebar'>
                <button className='sidebar-btn-close' onClick={closeSidebar}><FaTimes/></button>
                <div>
                    {mainMenu.map((item,i) => {
                        const {page, links} = item;
                        return(
                            <article  key={i}>
                                <h3>{page}</h3>
                                <ul>
                                {links.map((link,i) =>{
                                    const {label, icon, url} = link;
                                    return <li key={i}><Link to={url}>{icon} {label}</Link></li>
                                })}
                                </ul>
                                
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;