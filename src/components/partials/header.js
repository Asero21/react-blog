import '../css/header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
      
      <div className=''>
        <header>
          
          <ul>
            <li>
              <Link className='text-style' to="/home">Home</Link>
            </li>
            <li>
              <Link className='text-style' to="/post">Post</Link>
            </li>
            <li>
              <Link className='text-style' to="/create">Create</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }

  export default Header;
