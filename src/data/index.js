import {BiDrink, BiHistory} from 'react-icons/bi';
import {FaOdnoklassniki, FaCrown, FaCocktail, FaPuzzlePiece, FaCodepen, FaFacebook, FaLinkedin} from 'react-icons/fa';
import {GiMissilePod} from 'react-icons/gi';
export const mainMenu = [
    {
        page: 'Brief intro',
        links:[
            {label:'What is cocktail',icon:<BiDrink/>, url:'/definition'},
            {label:'Cocktail stories',icon:<BiHistory/>, url:'/history'}
        ]
    },
    {
        page: 'Customers',
        links:[
            {label:'Beginer',icon:<FaOdnoklassniki/>, url:'/types'},
            {label:'Taster',icon:<FaCocktail/>, url:'/types'},
            {label:'Drink critic',icon:<FaCrown/>, url:'/types'}
        ]
    },
    {
        page: 'About',
        links:[
            {label:'About us',icon:<FaPuzzlePiece/>, url:'/about'},
            {label:'Our mission',icon:<GiMissilePod/>, url:'/types'},
        ]
    }
]

export const socials = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />,
      },
      {
        id: 2,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        url: 'https://www.codepen.com',
        icon: <FaCodepen />,
      },
]