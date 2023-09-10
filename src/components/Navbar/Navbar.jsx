import React, { useState } from 'react'
import { HomeContainerStyled, CartNavStyled, LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled, UserNavStyled, UserContainerStyled, SpanStyled, MenuContainerStyled, MenuuContainerStyled, ImgContainerStyled, TitleStyled} from './NavbarStyles'
import {motion} from "framer-motion"
import {RiHomeSmile2Fill} from "react-icons/ri"
import {FaUserCircle} from "react-icons/fa"
import {RiMenu3Fill} from "react-icons/ri";
import {MdRestaurantMenu} from "react-icons/md"
import {FaWindowClose} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHidden } from '../../redux/user/userSlice';

function Navbar() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Mobile, setMobile] = useState(false)

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <ImgContainerStyled>
        <Link to = '/'>
          <TitleStyled>GOODBURGUER</TitleStyled>
        </Link>
      </ImgContainerStyled>
      <LinksContainerStyled>
        <ul className= {Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false) }>
          <HomeContainerStyled>
            <motion.div whileTap={{scale: 0.9}}>
            <Link to='/'>
              <LinkContainerStyled >
                <RiHomeSmile2Fill/>
              </LinkContainerStyled>
              Home
            </Link>
            </motion.div>
          </HomeContainerStyled>
          <MenuuContainerStyled>
            <motion.div whileTap={{scale: 0.9}}>
              <Link to='/Products'>
                <LinkContainerStyled>
                  <MdRestaurantMenu/>
                </LinkContainerStyled>
                  Menu
              </Link>
            </motion.div>
          </MenuuContainerStyled>
          <UserNavStyled>
              <UserContainerStyled onClick={() => 
                currentUser ? dispatch(toggleMenuHidden()) 
                : navigate("/login")
              }>
                <SpanStyled>
                  {
                    currentUser ? `${currentUser.nombre}` : 'Iniciá sesion'
                  }
                </SpanStyled>
                <FaUserCircle/>
              </UserContainerStyled>
          </UserNavStyled>
        </ul>
        <CartNavStyled>
              <CartIcon/>
        </CartNavStyled>
        <motion.div whileTap={{scale: 0.95}}>
            <MenuContainerStyled onClick={() => setMobile(!Mobile)}>
              {Mobile? <FaWindowClose style={{color: "#ff9d01", fontSize: "30px", paddingtop: "20px", cursor: "pointer"}}/> : <RiMenu3Fill/>}
            </MenuContainerStyled>
        </motion.div>
      </LinksContainerStyled>
    </NavbarContainerStyled>
    )
}

export default Navbar