import React,{useState} from 'react'
import './Header.css'
// import { Avatar } from '@mui/core'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from '../Contexts/StateProvider';
import MenuIcon from '@mui/icons-material/MenuRounded';
import Sidebar from './Sidebar';
// import ClearIcon from '@material-ui/icons/Clear';


const Header = () => {
    const [{user}]=useStateValue()
    const [isShow, setIsShow] = useState(false);

    const displayMenu = (e) => {
        setIsShow(current => !current);
    }
    // const displayMenu = () => {
    //     console.log("menu")
    // }

    const ProfileMenu = (e) => {

    }


    return (
        <div className='header' >
            <div className="header__left">
                {/* <Avatar onCLick={ProfileMenu} className="header__avatar" src={user?.photoURL} alt={user?.displayName} /> */}
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search me" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
            </div>

           

            <button className="signout">Signout</button>

            <div onClick={displayMenu} className="hamburger">
                <MenuIcon />
            </div>

            



            {isShow && (
                <div>
                    <Sidebar>
                        </Sidebar>
                    </div>
            )}
            {/* <div className="hamburger">
                </> */}
            {/* </div> */}


        </div>
    )
}

export default Header