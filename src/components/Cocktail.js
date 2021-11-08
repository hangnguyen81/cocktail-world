
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cocktail = ({id, name, imgUrl, info, glass, intruction}) => {
  const [readMore, setReadMore] = useState(false);

  const showText = (text) =>{
    return <button className='btn-text' onClick={() => setReadMore(!readMore)}>{text}</button>
  }

  const cocktailIntro = () =>{
    if (intruction.length <= 100){
      return  <p>{intruction}</p>
    }else if (readMore)
        return (
          <>
            <p>{intruction}</p> 
            {showText('Show less')}
          </>
          )
      else
      return (
        <>
          <p>{intruction.slice(0,100)}</p> 
          {showText('Read more')}
        </>
        )
  }



  return (
    <div className='cocktail'>
      <img src={imgUrl} alt={name}/>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass} - {info}</h4>
        {cocktailIntro() }
        <Link to={`/cocktail/${id}`}><button className='btn'> details </button></Link>
      </div>
    </div>
  )
}

export default Cocktail;