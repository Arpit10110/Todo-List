import React from 'react'
import "../Style/Navbar.css"
import {useSelector} from "react-redux"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Link} from "react-router-dom"
const Navbar = () => {
  const { UserData } = useSelector((state) => state.Local);
  const { login } = useSelector((state) => state.Local);
  const UserName = login ? UserData[0]?.name : '';

  return (
    <>
      <nav>
        <div className="logo">
          <h3>Todo-List📄</h3>
        </div>
        {
          login =="true" ? <pre>Hello {UserName}💫</pre> : <span></span>
        }
        <div className="navitem">
          <Link to="/">Home</Link>
          {
            login =="true" ? <Link to="/profile"><AccountCircleRoundedIcon className='UserIcon'/></Link> : <Link to="/login">Login</Link>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar