import React from 'react'
import { FooterContainerStyled, LinksContainerStyled, SocialStyled, DesignedStyled } from './FooterStyles'
import {FiTwitter} from "react-icons/fi"
import {FaFacebook} from "react-icons/fa"
import {ImInstagram} from "react-icons/im"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <FooterContainerStyled>
        <LinksContainerStyled>
            <img src="https://res.cloudinary.com/dmloe0isx/image/upload/v1689517178/wqetvt3wcxlehc2ctdgd.png" alt="" />
            <a href='http://localhost:3000/'>GOODBURGUER</a>
            <p>RIO GALLEGOS - SANTA CRUZ</p>
            <Link to = '/profileform'>
              CONTACTO
            </Link>
            <SocialStyled>
              <FiTwitter/>
              <FaFacebook/>
              <ImInstagram/>
            </SocialStyled>
        </LinksContainerStyled>
        <DesignedStyled>
          <p>GOODBURGUER - Creada por Santiago Vidal</p>
        </DesignedStyled>
    </FooterContainerStyled>
  )
}

export default Footer