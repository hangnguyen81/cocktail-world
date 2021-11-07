import {Link} from 'react-router-dom';

function Error(){
    return(
        <div className='section'>
            <h3 className='section-title'>Oops!!! Please go back to home page</h3>
            <Link to='/' className='btn btn-block'>Back to homepage</Link>
        </div>
    )
}

export default Error;