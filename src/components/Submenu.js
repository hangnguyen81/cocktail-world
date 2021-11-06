import {useGlobalContext} from '../cocktailContext';
import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Submenu(){
    const {isSubmenuOpen, page: {page, links}, location} = useGlobalContext();
    const pageContainer = useRef(null);
    const [cols, setCols] = useState('col-2');

    useEffect(()=>{
        const {x, y} = location;
        const submenu = pageContainer.current;
        submenu.style.left =`${x}px`;
        submenu.style.top =`${y}px`;
        if (links.length === 3)
            setCols('col-3');
        else if (links.length >3)
            setCols('col-4');
            else
                setCols('col-2');
    },[links.length, location])

    return(
        <div className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={pageContainer}>
            <h4>{page}</h4>
            <div className={`submenu-center ${cols}`}>
                {
                    links.map((link,i) =>{
                        const {label, icon, url} = link;
                        return <Link key={i} to={url}>{icon} {label}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default Submenu;